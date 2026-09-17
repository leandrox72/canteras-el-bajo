import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import './select.css';

const Select = ({ placeholder, items, name, value, onChange }) => {

  const [open, setOpen] = useState(false);

  const handleSelect = (selectedValue) => {
    if (onChange) {
      onChange({
        target: {
          name: name,
          value: selectedValue
        }
      });
    }
    setOpen(false)
  }

  const displayValue = value ? value : placeholder;
  
  return (
    <div className='select__cont'>
      <button type='button' className={`select ${open && 'open'}`} onClick={() => setOpen(!open)}>
        <p className={displayValue === placeholder && 'select__placeholder'}>{displayValue}</p>
        <MdKeyboardArrowDown className={`select__icon ${open && 'rotated'}`} />
      </button>
      <AnimatePresence mode='wait'>
        {open && (
          <motion.ul
            className='select__dropdown'
            initial={{
              height: '0px'
            }}
            animate={{
              height:'fit-content'
            }}
            exit={{
              height: '0px'
            }}
            transition={{
              duration: .25,
              easings:['easeInOut']
            }}
          >
            {items?.map((item) => (
              <button
                type='button' 
                key={item?.id}
                onClick={() => handleSelect(item.name)}
              >{item?.name}</button>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Select
