import './loading.css'
import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <motion.div 
      className='loading'
      hidden={{
        opacity: 0,
      }}
      show={{
        opacity: 1,
        transition: .5,
      }}
      exit={{
        opacity: 0,
        transition: .25,
      }}
    />
  )
}

export default Loading
