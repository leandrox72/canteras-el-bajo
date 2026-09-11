import { useState } from 'react'
import { products } from '../../constants/data';
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

  const steps = [
    { id: 0, title: "Producto", subtitle: "¿Qué material estás buscando?", completed: false },
    { id: 1, title: "Volumen", subtitle: "Cantidad", completed: false },
    { id: 2, title: "Logistica", subtitle: "Modalidad del Pedido", completed: false },
    { id: 3, title: "Contacto", subtitle: "Dejanos tus datos", completed: false }
  ]

  const unitOptions = [{ id: 0, name: 'Metros Cubicos' }, { id: 1, name: 'Toneladas' }]
  const freightOptions = [{ id: 0, name: 'Retiro en Planta' },{ id: 1, name: 'Con Flete' }]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
    console.log(formData)
  }

  const handleNext = () => {
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
          <label>Selecciona el Material</label>
          <Select
            name='material'
            value={formData.material}
            onChange={handleChange}
            placeholder='Material'
            items={products}
          />
        </div>
        );
      case 1:
        return (
          <div className='stepContent'>
            <label>Cantidad</label>
            <input type='number' name='volume' required/>
            <Select
              name='unit'
              value={formData.unit}
              onChange={handleChange}
              placeholder='Unidad de Medida'
              items={unitOptions}
            />
          </div>
        )
      case 2:
        return (
          <div className='stepContent'>
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
        )
      case 3:
        return (
          <div className='stepContent'>
            <label>Nombre</label>
            <input type='text' name='name' placeholder='Su nombre' required />
            <label>Firma</label>
            <input type='text' name='firm' placeholder='Su firma' />
            <label>Email</label>
            <input type='email' name='email' placeholder='Su email' required />
            <label>Telefono</label>
            <input type='tel' name='telephone' placeholder='Su telefono' required />
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
        return true;
      }
      case 3:
        return formData.name.trim() !== ''
          && formData.email.trim() !== ''
          && formData.telephone.trim() !== ''
      default:
        return true;
    }
  }

  return (
    <div className='multiStep'>
      <div className='multiStep__steps'>
        {steps.map((step) => (
          <button
            key={step.id}
            type='button'
            className={step.id == currentStep && "active"}
            onClick={() => setCurrentStep(step.id)}
            disabled={maxStepReached < step.id}
          >
            {step.title}
          </button>
        ))}
      </div>
      <h3>{steps[currentStep].subtitle}</h3>
      <form>
        {renderStepContent(currentStep)}
        <div className='form__actions'>
          {currentStep < steps.length - 1 ? (
            <button type='button' onClick={handleNext}>
                Siguiente
              </button>
            ) : (
              <button type='button'>
                Solicitar Presupuesto
              </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default MultiStep
