import React from 'react'
import './about.css'
import { motion } from 'framer-motion'

const About = ({ title, text, alt }) => {
  return (
    <section className={alt ? 'about about__alt' : 'about about__std'}>
      <div className={alt ? 'about__data about__data-alt' : 'about__data'}>
        <div className='about__data-h2'>
          <h2 className='section__h2'>{title}</h2>
        </div>
        <motion.div 
          className='about__data-p'
          initial={{
            opacity: 0,
            y: 32,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .5 
          }}
        >
          <p>{text}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
