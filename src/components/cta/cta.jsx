import './cta.css'
import { VscTriangleRight } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";

const Cta = () => {

  return (
    <a className='cta' aria-label="Contactar por WhatsApp" href='https://wa.me/5403518762106' target="_blank" rel="noopener noreferrer">
      <div className='cta__data'>
        <FaWhatsapp className='cta__data-icon'/>
      </div>
      <VscTriangleRight className='cta__form'/>
    </a>
  )
}

export default Cta
