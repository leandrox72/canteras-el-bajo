import React from 'react'
import './aboutProducts.css'
import { ProductCard2, SectionH2 } from '../../subcomponents'
import { products } from '../../constants/data'

const AboutProducts = () => {
  return (
    <div className='aboutProducts'>
      <SectionH2 text='Nuestros Productos' />
      <div className='aboutProducts__products'>
        {products.map((card) => (
          <ProductCard2 
            img={card.img}
            title={card.name} 
            desc={card.desc}
            key={card.id}
          />
        ))}
      </div>
    </div>
  )
}

export default AboutProducts
