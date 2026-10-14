import './checkbox.css';

const Checkbox = ({ name, value, onChange }) => {
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
    <button type='button'>

    </button>
  )
}

export default Checkbox