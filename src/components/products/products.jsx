import React from 'react'
import './products.css'
import { products } from '../../constants/data'
import { Button, ProductCard, SectionH2, SectionH3 } from '../../subcomponents'

const Products = ({ setLoading }) => {

  return (
    <section className='products'>
      <div className='products__data'>
        <div>
          <SectionH3 title='Productos'/>
          <SectionH2 text='Nuestros Productos'/>
        </div>
        <div>
          <Button text='Ver Productos' href='/productos' setLoading={setLoading}/>
        </div>
      </div>
      <div className='products__cards' >
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            id={product.id} 
            name={product.name} 
            img={product.img} 
            setLoading={setLoading}
          />
        ))}
      </div>
    </section>
  )
}

export default Products
