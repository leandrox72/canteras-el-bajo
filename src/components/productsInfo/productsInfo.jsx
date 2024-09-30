import React, { useEffect, useState } from 'react'
import './productsInfo.css'
import { useLocation } from 'react-router-dom'
import { products } from '../../constants/data'
import { ProductCard2 } from '../../subcomponents'
import { motion } from 'framer-motion'

const ProductsInfo = () => {

  const location = useLocation()
  const [ product, setProduct ] = useState()

  useEffect(() => {
    if(location?.state?.id) {
        setProduct(products[location.state.id])
    }
    else {
        setProduct(products[0])
    }
  },[])

  return (
    <section className='productsInfo'>
      <ul className='productsInfo__menu'>
        {products.map((prod) => (
          <div onClick={() => setProduct(prod)}>
            <ProductCard2 
              title={prod.name}
              img={prod.img}
              key={prod.id}
            />
          </div>
        ))}
      </ul>
      <div className='productsInfo__data'>
        <motion.h3
          key={product?.title}
          initial={{opacity: 0, y: 75}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
        >{product?.name}</motion.h3>
        <motion.p
          key={product?.desc}
          initial={{opacity: 0, y: 75}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
        >{product?.desc}</motion.p>
      </div>
    </section>
  )
}

export default ProductsInfo
