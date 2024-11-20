import React, { useState } from 'react'
import './productInfo.css'
import { SectionH2 } from '../../subcomponents'
import { motion } from 'framer-motion';
import { products, productsImgs } from '../../constants/data';
import Carousel from '../carousel/carousel';

const ProductInfo = () => {

  const [ product, setProduct ] = useState(products[0])

  return (
    <div className='productInfo'>
      <Carousel imgs={productsImgs}/>
      <div className='productInfo__cont'>
        <SectionH2 text={product?.name} />
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
