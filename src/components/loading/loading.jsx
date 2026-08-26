import './loading.css'
import { motion } from 'framer-motion'

const Loading = ({ startVisible }) => {
  return (
    <motion.div 
      className='loading'
      initial={{
        opacity: startVisible ? 1 : 0,
      }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 1 },
      }}
    />
  )
}

export default Loading
