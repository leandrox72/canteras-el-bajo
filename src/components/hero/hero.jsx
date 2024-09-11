import React, { useEffect } from 'react'
import './hero.css'
import { Foto3 } from '../../constants/images'
import { animate, motion, useMotionValue } from 'framer-motion'
import { carouselData } from '../../constants/data'
import useMeasure from 'react-use-measure'

const Hero = () => {

  let [ref, { width }] = useMeasure()
  
  const xTranslation = useMotionValue(0)

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop
  }, [xTranslation, width])

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
      <div className='hero__carousel' >
        <motion.div className='hero__carousel-cont' ref={ref} style={{x: xTranslation}}>
          {[...carouselData, ...carouselData].map((item, idx) => (
            <h4 key={idx}>{item}</h4>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
