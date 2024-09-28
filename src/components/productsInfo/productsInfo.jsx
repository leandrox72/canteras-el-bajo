import React, { useEffect, useState } from 'react'
import './productsInfo.css'
import { useLocation } from 'react-router-dom'
import { products } from '../../constants/data'
import { ProductCard2 } from '../../subcomponents'

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
          <div>
            <ProductCard2 
              title={prod.name}
              img={prod.img}
              key={prod.id}
            />
          </div>
        ))}
      </ul>
      <div className='productsInfo__data'>
        <h3>{product?.name}</h3>
        <p>{product?.desc}</p>
      </div>
    </section>
  )
}

export default ProductsInfo
