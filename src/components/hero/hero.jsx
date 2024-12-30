import React from 'react'
import './hero.css'
import { Foto3 } from '../../constants/images'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__data'>
        <span>CANTERAS EL BAJO</span>
        <span>LIDERES EN EL MERCADO</span>
      </div>
      <div className='hero__bg'>
        <span className='hero__bg-overlay'/>
        <img src={Foto3} />
      </div>
    </section>
  )
}

export default Hero
