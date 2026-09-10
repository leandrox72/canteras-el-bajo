import { useState } from 'react'
import { products } from '../../constants/data';
import './multiStep.css'

const MultiStep = () => {

  const [currentStep, setCurrentStep] = useState(0);
  const [maxStepReached, setMaxStepReached] = useState(0);

  const [formData, setFormData] = useState({
    material: '',
    volume: '',
    unit: 'm3',
    freight: true,
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

  const handleNext = () => {
    if (currentStep >= steps.length - 1) return;

    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    
    if (nextStep > maxStepReached) {
      setMaxStepReached(nextStep);
      console.log(nextStep);
    } else {
      console.log(maxStepReached); 
    }
  }

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
      return (
        <div className='stepContent'>
          <label>Selecciona el Material</label>
          <select>
            {products.map((item) => (
              <option key={item.id}>{item.name}</option>
            ))}
          </select>
        </div>
        );
      case 1:
        return (
          <div className='stepContent'>
            <label>Cantidad</label>
            <input type='number' name='volume' />
            <select>
              <option value='m3'>M3</option>
              <option value='toneladas'>Toneladas</option>
            </select>
          </div>
        )
      case 2: 
        return (
          <div className='stepContent'>
            <label>
              Fletobich
              <input type='checkbox' name='flete' checked={formData.freight} />
            </label>
            {formData.freight && (
              <input type='text' name='location' placeholder='Ubicacion'/>
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
