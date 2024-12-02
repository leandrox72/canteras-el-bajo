import React from 'react'
import './sectionH2.css'
import { motion } from 'framer-motion'

const SectionH2 = ({ text }) => {
  return (
    <motion.h2 
      className='sectionH2'
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
      {text}
    </motion.h2>
  )
}

export default SectionH2
