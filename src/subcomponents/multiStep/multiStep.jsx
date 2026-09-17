import { useState } from 'react'
import { products, steps, unitOptions, freightOptions } from '../../constants/data';
import './multiStep.css'
import Select from '../select/select';

const MultiStep = () => {

  const [currentStep, setCurrentStep] = useState(0);
  const [maxStepReached, setMaxStepReached] = useState(0);

  const [formData, setFormData] = useState({
    material: '',
    volume: '',
    unit: '',
    freight: '',
    location: '',
    name: '',
    firm: '',
    email: '',
    telephone: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
    console.log(formData)
  }

  const handleNext = () => {
    if (!validateStep()) {
      alert("Por favor, completá los campos requeridos para continuar.");
      return; 
    }
    
    if (currentStep >= steps.length - 1) return;

    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);

    if (nextStep > maxStepReached)
      setMaxStepReached(nextStep);
  }

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
              placeholder='Material'
              items={products}
            />
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
              <Select
                name='unit'
                value={formData.unit}
                onChange={handleChange}
                placeholder='Unidad de Medida'
                items={unitOptions}
              />
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
                placeholder='Modalidad'
                items={freightOptions}
              />
              {formData.freight === freightOptions[1].name && (
                <input type='text' name='location' placeholder='Ubicacion' required/>
              )}
            </div>    
          </div>
        )
      case 3:
        return (
          <div className='stepContent'>
            <div>
              <label>Nombre</label>
              <input type='text' name='name' placeholder='Su nombre' required />
            </div>
            <div>
              <label>Empresa (opcional)</label>
              <input type='text' name='firm' placeholder='Su firma' />
            </div>
            <div>
              <label>Telefono</label>
              <input type='tel' name='telephone' placeholder='Su telefono' required />
            </div>
            <div>
              <label>Email (opcional)</label>
              <input type='email' name='email' placeholder='Su email' />
            </div>
          </div>
        )
      
      default:
        return <div>Paso no encontrado</div>;
    }
  }

  const validateStep = () => {
    switch (currentStep) {
      case 0:
        return formData.material !== '';
      case 1:
        return formData.volume !== '' && formData.unit !== '';
      case 2: { 
        const isFreight = formData.freight === freightOptions[1].name;
        if (isFreight) return formData.location.trim() !== '';
        else return formData.freight !== '';
      }
      case 3:
        if (formData.email !== '') {
          const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
          if(!regex.test(formData.email)) return
        }
        return formData.name.trim() !== ''
          && formData.telephone.trim() !== ''
      default:
        return true;
    }
  }

  const validate = () => {
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='multiStep'>
      <div className='multiStep__steps'>
        <div className='multiStep__steps-btns'>
          {steps.map((step) => (
            <button
              key={step.id}
              type='button'
              className={step.id == currentStep && "active"}
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
        <p>{steps[currentStep]?.subtitle}</p>
      </div>
      <form>
        {renderStepContent(currentStep)}
        <div className='form__actions'>
          {currentStep < steps.length - 1 ? (
            <button type='button' className="multiStep__nav" onClick={handleNext}>
                Siguiente
              </button>
            ) : (
              <button type='button' className='multiStep__submit' onClick={handleSubmit}>
                Solicitar Presupuesto
              </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default MultiStep
