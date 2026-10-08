import { useState } from 'react'
import { productList, steps, unitOptions, freightOptions } from '../../constants/data';
import './multiStep.css'
import { Select, FormSuccess, ErrorPopup } from '../index.js'
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

const stepFields = [
  ['material'],
  ['volume', 'unit'],
  ['freight', 'location'],
  ['name', 'telephone', 'email']
];

const MultiStep = () => {

  const [currentStep, setCurrentStep] = useState(0);
  const [maxStepReached, setMaxStepReached] = useState(0);

  const [formData, setFormData] = useState({
    material: '', volume: '', unit: '', freight: '',
    location: '', name: '', firm: '', email: '', telephone: ''
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sended, setSended] = useState(false);
  const [sendError, setSendError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar el error del campo al escribir
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const { [name]: _omit, ...rest } = prev;
      return rest;
    })
  }

  const validateStep = (step = currentStep) => {
    const fields = stepFields[step] ?? [];
    const stepErrors = {};

    for (const field of fields) {
      const message = validators[field]?.(formData[field], formData) ?? ';';
      if (message) stepErrors[field] = message;
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  }

  const handleNext = () => {
    if (!validateStep()) return;

    if (currentStep >= steps.length - 1) return;

    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setMaxStepReached((prev) => Math.max(prev, nextStep));
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
          <div>
            <label>Selecciona el Material</label>
            <Select
              name='material'
              value={formData.material}
              onChange={handleChange}
              placeholder='Ej: Arena Gruesa'
              items={productList}
            />
            {fieldError('material')}
          </div>
        </div>
        );
      case 1:
        return (
          <div className='stepContent'>
            <div>
              <label>Cantidad</label>
              <input
                type='number'
                name='volume'
                value={formData.volume}
                onChange={handleChange}
              />
              {fieldError('volume')}
              <Select
                name='unit'
                value={formData.unit}
                onChange={handleChange}
                placeholder='Ej: Metro Cubico'
                items={unitOptions}
              />
              {fieldError('unit')}
            </div>
          </div>
        )
      case 2:
        return (
          <div className='stepContent'>
            <div>
              <label>Logistica</label>
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
            <div>
              <label>Nombre</label>
              <input
                type='text'
                name='name'
                placeholder='Ej: Leandro Vaca'
                value={formData.name}
                onChange={handleChange}
              />
              {fieldError('name')}
            </div>
            <div>
              <label>Empresa (opcional)</label>
              <input
                type='text'
                name='firm'
                placeholder='Ej: Canteras El Bajo'
                value={formData.firm}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Telefono</label>
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
              <label>Email (opcional)</label>
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
              disabled={maxStepReached < step.id}
            >
              {step.name}
            </button>
          ))}
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
          {currentStep < steps.length - 1 ? (
              <button type='button' className="multiStep__nav" onClick={handleNext}>
                Siguiente
              </button>
            ) : (
              <button type='button' className='multiStep__submit' onClick={handleSubmit} disabled={sending}>
                Solicitar Presupuesto
              </button>
          )}
          <button type='button' onClick={simulateError} disabled={sending}>
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
