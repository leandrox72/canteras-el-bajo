import React from 'react'
import './productCard2.css'
import { motion } from 'framer-motion'

const ProductCard2 = ({ img, title }) => {
  return (
    <div className='productCard2'>
      <div className='productCard2__cont'>
        <motion.img 
          src={img} 
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1, 
            delay: .25
          }} 
        />
        <div className='productCard2__title'>
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  )
}

export default ProductCard2
