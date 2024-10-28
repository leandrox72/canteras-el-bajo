import React from 'react'
import './loading.css'
import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <motion.div 
      className='loading'
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    />
  )
}

export default Loading
