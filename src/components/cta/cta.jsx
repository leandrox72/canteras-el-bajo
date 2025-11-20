import './cta.css'
import { VscTriangleRight } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";

const Cta = () => {

  return (
    <div className='cta'>
      <a className='cta__data' href='https://wa.me/5403518762106' target="_blank">
        <FaWhatsapp className='cta__data-icon'/>
      </a>
      <VscTriangleRight className='cta__form'/>
    </div>
  )
}

export default Cta
