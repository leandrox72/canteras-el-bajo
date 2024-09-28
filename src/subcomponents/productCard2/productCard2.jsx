import React from 'react'
import './productCard2.css'

const ProductCard2 = ({ img, title }) => {
  return (
    <div className='productCard2'>
      <img src={img} />
      <h4>{title}</h4>
    </div>
  )
}

export default ProductCard2
