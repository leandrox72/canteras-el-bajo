import React from 'react'
import './pagesHero.css'
import { Gallery } from '../../subcomponents'

const PagesHero = ({ title, imgs }) => {

  return (
    <section className='pagesHero'>
      <div className='pagesHero__title'>
        <h2>{title}</h2>
      </div>
      {imgs && (
        <Gallery imgs={imgs} />
      )}
    </section>
  )
}

export default PagesHero
