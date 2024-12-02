import React from 'react'
import './sectionH3.css'
import { motion } from 'framer-motion'

const SectionH3 = ({ title }) => {
  return (
    <motion.h3 
      className='sectionH3'
      initial={{ 
        opacity: 0,
        y: 16,
      }}
      whileInView={{ 
        opacity: 1,
        y: 0,
       }}
      transition={{ duration: .5 }}
    >
      {title}
    </motion.h3>
  )
}

export default SectionH3
