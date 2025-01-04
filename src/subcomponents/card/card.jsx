import React from 'react'
import './card.css'

const Card = ({ product, setProduct, active }) => {
  return (
    <div className='card' onClick={() => setProduct(product)}>
      <div className='card__img'>
        <img src={product.img}/>
      </div> 
      <div className={active ? 'card__data card__data-active' : 'card__data'}>
        <p>{product.name}</p>
      </div>
    </div>
  )
}

export default Card
