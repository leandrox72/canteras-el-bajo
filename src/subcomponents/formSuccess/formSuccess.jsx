import { FaCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import './formSuccess.css'

const FormSuccess = () => {

  return (
    <div className='formSuccess'>
      <div className='formSuccess__data'>
        <div className="formSuccess__icon">
          <FaCircle className="bg" />
          <FaCheck className="check" />
        </div>
        <h3>El Formulario se ha enviado correctamente</h3>
        <p>Gracias por contactarte con nosotros</p>
      </div>
      <span className='formSuccess__curtain'/>
    </div>
  )
}

export default FormSuccess