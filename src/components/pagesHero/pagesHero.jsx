import React from 'react'
import './pagesHero.css'

const PagesHero = ({ title, imgs }) => {
  return (
    <section className='pagesHero'>
      <div className='pagesHero__title'>
        <h2>{title}</h2>
      </div>
    </section>
  )
}

export default PagesHero
