import './checkbox.css';

const Checkbox = ({ name, checked = false, onChange }) => {

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