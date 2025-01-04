import React, { useState } from 'react'
import './products.css'
import { products } from '../../constants/data';
import { Card } from '../../subcomponents';

const Products = () => {

  const [ product, setProduct ] = useState(products[0])

  return (
    <div className='products'>
      <ul className='products__cards'>
        {products.map((item) => (
          <Card
            key={item.id}
            product={item} 
            setProduct={setProduct}
            active={product.id === item.id && true}
          />
        ))}
      </ul>
      <div className='products__data'>
        <h2>{product.name}</h2>
        <div className='products__data-cont'>
          <ul className='info__cont'>
            {product.info.map((item, index) => (
              <li key={index}><p>{item.title}: {item.value}</p></li>
            ))}
          </ul>    
          <p className='desc'>{product.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Products
