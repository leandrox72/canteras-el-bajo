import React, { useState } from 'react'
import './products.css'
import { products } from '../../constants/data';

const Products = () => {

  const [ product, setProduct ] = useState(products[0])

  return (
    <div className='products'>
      <ul className='products__select'>
        {products.map((item) => (
          <li 
            key={item.id} 
            className={item.id === product.id && 'active'}
            onClick={() => setProduct(item)}
          >
              <span>{item.name}</span>
          </li>
        ))}
      </ul>
      <div className='products__data'>
        <h2>{product.name}</h2>
        <div className='products__data-cont'>
          <ul className='info__cont'>
            {product.info.map((item, index) => (
              <li key={index}><p>{item.title} {item.value}</p></li>
            ))}
          </ul>    
          <p className='desc'>{product.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Products
