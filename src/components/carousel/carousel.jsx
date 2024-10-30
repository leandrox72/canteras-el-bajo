import React, { useState } from 'react'
import './carousel.css'
import { Images } from '../../subcomponents'
import { motion, useMotionValue } from 'framer-motion'
import { FaArrowDown } from "react-icons/fa";

const DRAG_BUFFER = 20;

const OPTIONS = {
    type: "spring",
    mass: 1,
    stiffness: 500,
    damping: 100,
}

const Carousel = ({ imgs }) => {

  const [ index, setIndex ] = useState(0);
  const [ dragging, setDragging ] = useState(false);

  const dragX = useMotionValue(0);
  const length = imgs.length;

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();

    if (x <= -DRAG_BUFFER && index < length - 1) {
        setIndex((pv) => pv + 1)
    }
    else if (x >= DRAG_BUFFER && index > 0) {
        setIndex((pv) => pv - 1)
    }
  };

  const changeIndex = (direction) => {
    if (Array.isArray(imgs) && length > 0) {
      setIndex((prevIndex) => {
        const newIndex = (prevIndex + direction + length) % length;
        return newIndex;
      });
    }
  };

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
        transition={OPTIONS}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <Images imgs={imgs}/>
      </motion.div>
      <div className='carousel__btns'>
        <div className='carousel__btns-cont'>
          <div className='carousel__btn' onClick={() => changeIndex(-1)}>
            <FaArrowDown className='carousel__btn-icon'/>
          </div>
          <div className='carousel__btn' onClick={() => changeIndex(1)}>
            <FaArrowDown className='carousel__btn-icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
