import React from 'react'
import './pagesHero.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

const PagesHero = ({ title, imgs }) => {

  const [ img, setImg ] = useState(0)
  const lenght = Object.keys(imgs).length;

  const forward = () => {
    if (img < lenght - 1) {
      setImg(img + 1)
    }
    else {
      setImg(0)
    }
  }

  const backward = () => {
    if (img > 0) {
      setImg(img - 1)
    }
    else {
      setImg(lenght - 1)
    }
  }


  return (
    <section className='pagesHero'>
      <div className='pagesHero__title'>
        <h2>{title}</h2>
      </div>
      <div className='pagesHero__gallery'>
        <motion.img 
          src={imgs[img].img} 
          key={img}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: .75 
          }} 
        />
        <div className='gallery__btns'>
          <div 
            className='gallery__btn'
            onClick={backward}
          >

          </div>
          <div 
            className='gallery__btn'
            onClick={forward}
          >

          </div>
        </div>
      </div>
    </section>
  )
}

export default PagesHero
