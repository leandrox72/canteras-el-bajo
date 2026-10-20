import { useState } from 'react'
import { productList, steps, unitOptions, freightOptions } from '../../constants/data';
import './multiStep.css'
import { Select, FormSuccess, ErrorPopup, Checkbox } from '../index.js'
import emailjs from '@emailjs/browser';

const DELIVERY_OPTION = freightOptions[1].name;

const validators = {
  
  material: (v) => (!v ? 'Selecciona un material' : ''),

  volume: (v) => {
    if (v === '') return 'Ingresa una cantidad';
    if (Number(v) <= 0) return 'La cantidad debe ser mayor a 0';
    return '';
  },

  unit: (v) => (!v ? 'Selecciona una unidad' : ''),

  items: (v) => (v.length === 0 ? 'Seleccioná al menos un material' : ''),
  
  freight: (v) => (!v ? 'Selecciona una opcion de logistica' : ''),

  location: (v, form) => {
    if (form.freight !== DELIVERY_OPTION) return '';
    if (!v?.trim()) return 'Ingresá la dirección de entrega';
    return '';
  },

  name: (v) => (!v.trim() ? 'Ingresa tu nombre' : ''),

  telephone: (v) => {
    if (!v.trim()) return 'Ingresa tu telefono';
    return /^[\d\s+()-]{6,}$/.test(v) ? '' : 'Teléfono inválido';
  },

  email: (v) => {
    if (!v) return '';
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(v)
      ? ''
      : 'Ingresá un email válido';
  }
};

const validateItem = (item) => {
  const errs = {};
  const volumeError = validators.volume(item.volume);
  const unitError = validators.unit(item.unit);
  if (volumeError) errs[`volume-${item.id}`] = volumeError;
  if (unitError) errs[`unit-${item.id}`] = unitError;
  return errs;
}

const stepFields = [
  ['items'],
  [],
  ['freight', 'location'],
  ['name', 'telephone', 'email']
];

const MultiStep = () => {

  const [currentStep, setCurrentStep] = useState(0);
  const [maxStepReached, setMaxStepReached] = useState(0);

  const [formData, setFormData] = useState({
    items: [], freight: '', location: '', name: '',
    firm: '', email: '', telephone: ''
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sended, setSended] = useState(false);
  const [sendError, setSendError] = useState(null);

  const clearError = (key) => {
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const { [key]: _omit, ...rest } = prev;
      return rest;
    })
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    clearError(name);
  }

  const toggleProduct = (product) => {
    setFormData((prev) => {
      const exist = prev.items.some((i) => i.id === product.id);
      const items = exist
        ? prev.items.filter((i) => i.id !== product.id)
        : [...prev.items, { id: product.id, name: product.name, volume: '', unit: '' }];
      return { ...prev, items };
    });
    clearError('items');
  }

  const handleItemChange = (id, e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      items: prev.items.map((i) => (i.id === id ?
        { ...i, [name]: value } : i)),
    }));
    clearError(`${name}-${id}`);
  }

  const validateStep = (step = currentStep) => {
    const stepErrors = {};

    if (step === 1) {
      formData.items.forEach((item) => Object.assign(stepErrors, validateItem(item)));
    } else {
      for (const field of stepFields[step] ?? []) {
        const message = validators[field]?.(formData[field], formData) ?? '';
        if (message) stepErrors[field] = message;
      }
    }

    setErrors(stepErrors)
    return Object.keys(stepErrors).length === 0;
  }

  const handleNext = () => {
    if (!validateStep()) return;

    if (currentStep >= steps.length - 1) return;

    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setMaxStepReached((prev) => Math.max(prev, nextStep));
  }

  const handlePrevious = () => {
    if (currentStep < 1) return;
    
    const previousStep = currentStep - 1;
    setCurrentStep(previousStep);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep()) return;
    if (sending || sended) return;
    
    setSending(true);
    emailjs.send(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_KEY, formData, import.meta.env.VITE_PUBLIC_KEY)
      .then(() => {
        setSending(false);
        setSended(true);
      }, (error) => {
        console.log(error);
        setSending(false);
        setSended(false);
        setSendError('No pudimos enviar el formulario. Revisá tu conexión e intentá de nuevo.');
      })
  };

  const simulateError = () => {
    setSendError('Ha ocurrido un error nigga')
  }

  const fieldError = (field) =>
    errors[field] ? <p className='field__error'>{errors[field]}</p> : null;

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
      return (
        <div className='stepContent'>
          <label className='stepContent__item-label'>Selecciona los Materiales</label>
          <div className='stepContent__products'>
            {productList.map((product) => (
              <Checkbox
                key={product.id}
                name={product.name}
                checked={formData.items.some((i) => i.id === product.id)}
                onChange={() => toggleProduct(product)}
              />
            ))}
            {fieldError('items')}
          </div>
        </div>
        );
      case 1:
        return (
          <div className='stepContent'>
            {formData.items.map((item) => (
              <div key={item.id} className='stepContent__item'>
                <label className='stepContent__item-label'>{item.name}</label>
                <div className='stepContent__volume'>
                  <input
                    type='number'
                    name='volume'
                    min='0'
                    inputMode='decimal'
                    value={item.volume}
                    onChange={(e) => handleItemChange(item.id, e)}
                  />
                  <Select
                    name='unit'
                    value={item.unit}
                    onChange={(e) => handleItemChange(item.id, e)}
                    placeholder='Ej: Metro Cúbico'
                    items={unitOptions}
                  />
                </div>
                {fieldError(`volume-${item.id}`)}
                {fieldError(`unit-${item.id}`)}
              </div>
            ))}
          </div>
        )
      case 2:
        return (
          <div className='stepContent'>
            <div className='stepContent__item'>
              <label className='stepContent__item-label'>Logistica</label>
              <Select
                name='freight'
                value={formData.freight}
                onChange={handleChange}
                placeholder='Ej: Retiro en Planta'
                items={freightOptions}
              />
              {fieldError('freight')}
              {formData.freight === DELIVERY_OPTION && (
                <>
                  <input
                    type='text'
                    name='location'
                    value={formData.location}
                    onChange={handleChange}
                    placeholder='Ej: Haedo 149'
                  />
                  {fieldError('location')}
                </>
              )}
            </div>
          </div>
        )
      case 3:
        return (
          <div className='stepContent'>
            <div className='stepContent__item'>
              <label className='stepContent__item-label'>Nombre</label>
              <input
                type='text'
                name='name'
                placeholder='Ej: Leandro Vaca'
                value={formData.name}
                onChange={handleChange}
              />
              {fieldError('name')}
            </div>
            <div className='stepContent__item'>
              <label className='stepContent__item-label'>Empresa (opcional)</label>
              <input
                type='text'
                name='firm'
                placeholder='Ej: Canteras El Bajo'
                value={formData.firm}
                onChange={handleChange}
              />
            </div>
            <div className='stepC'>
              <label className='stepContent__item-label'>Telefono</label>
              <input
                type='tel'
                name='telephone'
                placeholder='Ej: +54 351 876-2106'
                value={formData.telephone}
                onChange={handleChange}
              />
              {fieldError('telephone')}
            </div>
            <div>
              <label className='stepContent__item-label'>Email (opcional)</label>
              <input
                type='email'
                name='email'
                placeholder='Ej: gmcanteras@gmail.com'
                value={formData.email}
                onChange={handleChange}
              />
              {fieldError('email')}
            </div>
          </div>
        )

      default:
        return <div>Paso no encontrado</div>;
    }
  }

  const renderNavButtons = (step) => {
    switch (true) {
      case step < 1:
        return (
          <button type='button' className='multiStep__nav' onClick={handleNext} disabled={sending}>
            Siguiente
          </button>
        )
      case step === steps.length - 1:
        return (
          <>
            <button type='button' className='multiStep__nav' onClick={handlePrevious} disabled={sending}>
              Atras
            </button>
            <button type='button' className='multiStep__submit' onClick={handleSubmit} disabled={sending}>
              Solicitar Presupuesto
            </button>
          </>
        )
      default:
        return (
          <>
            <button type='button' className='multiStep__nav' onClick={handlePrevious} disabled={sending}>
              Atras
            </button>
            <button type='button' className='multiStep__nav' onClick={handleNext} disabled={sending}>
              Siguiente
            </button>
          </>
        )
    }
  }

  return (
    <div className='multiStep'>
      <div className='multiStep__steps'>
        <div className='multiStep__steps-btns'>
          {steps.map((step) => (
            <button
              key={step.id}
              type='button'
              className={step.id == currentStep ? "active" : ''}
              onClick={() => setCurrentStep(step.id)}
              disabled={maxStepReached < step.id || (step.id > 0 && formData.items.length === 0)}
              style={{
                display: step.id <= maxStepReached ? 'flex' : 'none'
              }}
            >
              {step.name}
            </button>
          ))}
        </div>
        <div className='multiStep__steps-single'>
          <button type='button' className='active'>
            {steps[currentStep].name}
          </button>
        </div>
        <div className='multiStep__pb'>
          <div
            className='pb__bar'
            style={{
              width: `${(maxStepReached + 1) / steps.length * 100}%`
            }}
          />
        </div>
      </div>
      <div className="multiStep__titles">
        <h3>{steps[currentStep].title}</h3>
        <p>Te enviaremos la cotización exacta con los costos de envío a tu WhatsApp lo antes posible</p>
      </div>
      <form>
        {renderStepContent(currentStep)}
        <div className='form__actions'>          
          {renderNavButtons(currentStep)}
          <button type='button' onClick={simulateError} disabled={sending} className='testeardium'>
            Testear
          </button>
        </div>
        {sended && (<FormSuccess />)}
      </form>
      {sendError && (
        <ErrorPopup
          title="No pudimos enviar el formulario"
          text={sendError}
          onClose={() => setSendError(null)}
          autoDismiss={2000}
        />
      )}
    </div>
  )
}

export default MultiStep