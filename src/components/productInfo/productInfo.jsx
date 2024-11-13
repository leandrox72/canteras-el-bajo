import React, { useState } from 'react'
import './productInfo.css'
import { SectionH2 } from '../../subcomponents'
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion } from 'framer-motion';
import { Foto3 } from '../../constants/images';

const ProductInfo = ({ product, open, setOpen }) => {

  return (
    <div className='productInfo' style={{backgroundImage: `url(${Foto3})`}}>
      <AnimatePresence>
        {open && (
          <motion.div className='productInfo__cont'>
            <div className='productInfo__close'>
              <IoCloseSharp 
                className='productInfo__close-icon'
                onClick={() => setOpen(false)}
              />
            </div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProductInfo
