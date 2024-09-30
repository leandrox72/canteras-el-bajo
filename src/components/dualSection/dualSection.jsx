import React from 'react'
import './dualSection.css'
import { SectionH2, SectionH3, Button } from '../../subcomponents'
import { motion } from 'framer-motion'

const DualSection = ({ h3, h2, btn, href, setLoading, img, alt }) => {
  return (
    <section className={alt ? 'dual dual__alt' : 'dual'}>
      <div className='dual__data'>
        <div>  
          <SectionH3 title={h3}/>
          <SectionH2 text={h2}/>
        </div>
        <Button text={btn} href={href} setLoading={setLoading}/>
      </div>
      <div className='dual__img'>
        <motion.img 
          src={img}
          alt='img'
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1 
          }} 
        />
      </div>
    </section>
  )
}

export default DualSection
