import { useState, useEffect } from 'react'
import './carousel.css'
import { Images } from '../../subcomponents'
import { motion, useMotionValue } from 'framer-motion'
import { FaArrowDown } from "react-icons/fa";

const DRAG_BUFFER = 20;

const OPTIONS = {
    type: "spring",
    mass: 1,
    stiffness: 2500,
    damping: 200,
}

const Carousel = ({ imgs }) => {

  const length = imgs.length;

  // Clonamos la ultima imagen al principio y la primera al final.
  // Estos "clones" son los que permiten el salto invisible cuando
  // se llega a una punta del carrusel.
  const extendedImgs = [imgs[length - 1], ...imgs, imgs[0]];

  // index 1 = primera imagen real. index 0 y length+1 son los clones.
  const [ index, setIndex ] = useState(1);
  const [ isInstant, setIsInstant ] = useState(false);

  const dragX = useMotionValue(0);

  const clamp = (value) => Math.min(Math.max(value, 0), length + 1);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER) {
      setIndex((prev) => clamp(prev + 1))
    }
    else if (x >= DRAG_BUFFER) {
      setIndex((prev) => clamp(prev - 1))
    }
  };

  const changeIndex = (direction) => {
    setIndex((prev) => clamp(prev + direction))
  };

  // Cuando termina la animacion, si quedamos parados sobre un clon,
  // saltamos sin transicion a la imagen real equivalente. Como el
  // clon y la imagen real son visualmente identicos, el salto es invisible.
  const handleAnimationComplete = () => {
    if (index === 0) {
      setIsInstant(true);
      setIndex(length);
    }
    else if (index === length + 1) {
      setIsInstant(true);
      setIndex(1);
    }
  };

  useEffect(() => {
    if (isInstant) {
      const id = requestAnimationFrame(() => setIsInstant(false));
      return () => cancelAnimationFrame(id);
    }
  }, [isInstant]);

  return (
    <div className='carousel'>
      <motion.div
        className='carousel__cont'
        drag='x'
        dragConstraints={{
            left: 0,
            right: 0,
        }}
        style={{
            x: dragX,
        }}
        animate={{
            translateX: `calc(-${index * 100}% + var(--border-size) / 2)`,
        }}
        transition={isInstant ? { duration: 0 } : OPTIONS}
        onAnimationComplete={handleAnimationComplete}
        onDragEnd={onDragEnd}
      >
        <motion.div
          className='carousel__loading'
          initial={{
            x: 0,
          }}
          transition={{
            delay: .5,
            transition: 2,
          }}
          animate={{
            x: "-100%",
          }}
        />
        <Images imgs={extendedImgs}/>
      </motion.div>
      <div className='carousel__btns'>
        <div className='carousel__btns-cont'>
          <button type='button' className='carousel__btn' onClick={() => changeIndex(-1)}>
            <FaArrowDown className='carousel__btn-icon'/>
          </button>
          <button type='button' className='carousel__btn' onClick={() => changeIndex(1)}>
            <FaArrowDown className='carousel__btn-icon'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel