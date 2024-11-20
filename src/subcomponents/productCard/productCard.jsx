import React from 'react'
import './productCard.css'

const ProductCard = ({ id, name, img, select }) => {

  return (
    <div 
      className='productCard'
      onClick={() => select(id)}
    >
      <div className='productCard__img'>
        <span />
        <img src={img} />
      </div>
      <div className='productCard__data'>
        <h4>{name}</h4>
        <p>Conocer Mas</p>
      </div>
    </div>
  )
}

export default ProductCard
