import React from 'react'
import './hero.css'
import { Foto3 } from '../../constants/images'
import { motion  } from 'framer-motion'

const Hero = () => {

  return (
    <section className='hero'>
      <div className='hero__data'>
        <motion.h1
          initial={{ 
            opacity: 0,
            y: 80
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            duration: .5
          }}
        >Canteras <span>El Bajo</span></motion.h1>
        <p>Scroll para conocernos</p> 
      </div>
      <div className='hero__bg'>
        <span className='hero__bg-overlay'/>
        <img src={Foto3} />
      </div>
    </section>
  )
}

export default Hero
