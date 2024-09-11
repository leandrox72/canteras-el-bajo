import React, { useEffect, useState } from 'react'
import './productsInfo.css'
import { useLocation } from 'react-router-dom'
import { products } from '../../constants/data'

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
          <li 
            className={product == prod ? 'productsInfo__menu-item prod__active' : 'productsInfo__menu-item'}
            key={prod.id}
            onClick={() => setProduct(prod)}
          >{prod.name}</li>
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
