import React from 'react'
import './productInfo.css'
import { SectionH2 } from '../../subcomponents'
import { IoCloseSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

const ProductInfo = ({ product, setOpen }) => {

  console.log(product)

  return (
    <motion.div 
      className='productInfo'
      hidden={{
        opacity: 0,
      }}
      show={{
        opacity: 1,
      }}
      exit={{
        height: 0,
        transition: 1,
      }}  
    >
      <div className='productInfo__close'>
        <IoCloseSharp 
          className='productInfo__close-icon'
          onClick={() => setOpen(false)}
        />
      </div>
      <SectionH2 text={product?.name} />
      <div className='productInfo__desc'>
        <p>{product?.desc}</p>
      </div>
    </motion.div>
  )
}

export default ProductInfo
