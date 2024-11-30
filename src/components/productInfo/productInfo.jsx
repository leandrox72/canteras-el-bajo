import React, { useState } from 'react'
import './productInfo.css'
import { motion } from 'framer-motion';
import { products, productsImgs } from '../../constants/data';
import { SectionH2 } from '../../subcomponents';

const ProductInfo = () => {

  const [ product, setProduct ] = useState(products[0])

  return (
    <div className='productInfo'>
      <div className='productInfo__imgs'>
        <img src={product.img}/>
      </div>
      <div className='productInfo__cont'>
        <div className='productInfo__products'>
          {products.map((prod) => (
            <h2
              style={{
                color: prod === product ? '#000' : '#777',
                fontSize: prod === product ? '1.25rem' : '1rem'
              }}
              key={prod.id}
              onClick={() => setProduct(prod)}
            >{prod.name}</h2>
          ))}
        </div>
        <SectionH2 text={product.name} />
        <div className='productInfo__data'>  
          <ul className='productInfo__data-info'>
            {product?.info?.map((item) => (
              <li key={item}><p>{item.title}</p><p>{item.value}</p></li>
            ))}
          </ul>
          <div className='productInfo__data-desc'>
            <p>{product?.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
