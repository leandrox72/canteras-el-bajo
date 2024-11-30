import React, { useState } from 'react'
import { products } from '../../constants/data'
import { IoIosArrowDown } from "react-icons/io";
import './select.css'

const Select = ({ product, setProduct }) => {

  const [ open, setOpen ] = useState(false)

  return (
    <div className='select__cont'>
      <div className='select' onClick={() => setOpen(!open)}>
        <h2 className='section__h2'>{product.name}</h2>
        <IoIosArrowDown className='select__icon'/>
      </div>
      {open && (
        <div className='select__dropdown'>
          <ul className='select__dropdown-items'>
            {products.map((prod) => (
              <li 
                key={prod.id}
                onClick={() => {setProduct(products[prod.id]); setOpen(!open)}}
              >
                <p>{prod.name}</p>
              </li>
            ))}
          </ul>
        </div>)}
    </div>
  )
}

export default Select
