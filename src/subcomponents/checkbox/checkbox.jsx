import './checkbox.css';
import { FaCircle, FaRegCircle } from "react-icons/fa";


const Checkbox = ({ name, checked = false, onChange }) => {
  const handleSelect = (selectedValue) => {
    if (onChange) {
      onChange({
        target: {
          name: name,
          value: selectedValue
        }
      })
    }
  }

  return (
    <label className='checkbox'>
      <input
        className='checkbox__input'
        type='checkbox'
        checked={checked}
        onChange={onChange}
      />
      <span className='checkbox__check'>
        <span className='checkbox__check-circle'>
          <span className='checkbox__check-dot' />
        </span>
      </span>
      <div className='checkbox__text'>
        <p>{name ? name : 'placeholder'}</p>
      </div>
    </label>
  )
}

export default Checkbox