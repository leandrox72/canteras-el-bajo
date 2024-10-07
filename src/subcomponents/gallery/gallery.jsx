import React from 'react'
import './gallery.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Gallery = ({ imgs }) => {

  const [ img, setImg ] = useState(0)

  const changeImage = (direction) => {
    if (Array.isArray(imgs) && imgs.length > 0) {
      setImg((prevImg) => {
        const newIndex = (prevImg + direction + imgs.length) % imgs.length;
        return newIndex;
      });
    }
  };

  return (
    <div className='gallery'>
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
          onClick={() => changeImage(-1)}
        >   
        </div>
        <div 
          className='gallery__btn'
          onClick={() => changeImage(1)}
        >
        </div>
      </div>
    </div>
  )
}

export default Gallery
