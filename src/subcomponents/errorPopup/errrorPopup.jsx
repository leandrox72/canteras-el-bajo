import { useEffect } from 'react'
import './errorPopup.css'

const ErrorPopup = ({ text, onClose, autoDismiss = 0 }) => {

  useEffect(() => {
    if (!onClose) return;
    const handleKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose])

  useEffect(() => {
    if (!autoDismiss || !onClose) return;
    const t = setTimeout(onClose, autoDismiss);
    return () => clearTimeout(t);
  },[autoDismiss, onClose])
  
  return (
    <div
      className='errorPopup'
      role='alertdialog'
      aria-modal='true'
      aria-labelledby='errorPopup-text'
      onClick={(e) => e.stopPropagation()}
    >
      <p>{text ? text : "A ocurrido un error"}</p>
    </div>
  )
}

export default ErrorPopup