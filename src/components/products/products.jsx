import React from 'react'
import './products.css'
import { products } from '../../constants/data'
import { ProductCard } from '../../subcomponents'

const Products = ({ openAndSelect }) => {

  return (
    <section className='products'>
      <div className='products__cont'>
        {products.map((prod) => (
            <ProductCard 
              id={prod.id}
              name={prod.name}
              img={prod.img} 
              openAndSelect={openAndSelect}
            />
        ))}
      </div>
    </section>
  )
}

export default Products
