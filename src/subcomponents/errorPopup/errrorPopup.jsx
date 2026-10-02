import './errorPopup.css'

const ErrorPopup = ({ text }) => {
  return (
    <div className='errorPopup'>
      <p>{text ? text : "A ocurrido un error"}</p>
    </div>
  )
}

export default ErrorPopup