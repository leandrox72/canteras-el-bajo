import "./curtain.css"
import { motion } from "framer-motion"

const Curtain = ({ loading, duration, delay }) => {
  return (
    <motion.span
      className="curtain"
      initial={{
        width: "0%"
      }}
      animate={{
        width: loading ? "100%" : "0%"
      }}
      transition={{
        duration: duration + delay
      }}
    />
  )
};

export default Curtain;