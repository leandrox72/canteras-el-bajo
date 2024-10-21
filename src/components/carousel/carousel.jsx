import React, { useEffect, useState } from 'react'
import './carousel.css'
import { Images } from '../../subcomponents'
import { motion, useMotionValue } from 'framer-motion'

const DRAG_BUFFER = 50;

const OPTIONS = {
    type: "spring",
    mass: 1,
    stiffness: 500,
    damping: 100,
}

const Carousel = ({ imgs, length }) => {

  const [ index, setIndex ] = useState(0);
  const [ dragging, setDragging ] = useState(false);

  const dragX = useMotionValue(0);

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();

    if (x <= -DRAG_BUFFER && index < length - 3) {
        setIndex((pv) => pv + 1)
    }
    else if (x >= DRAG_BUFFER && index > 0) {
        setIndex((pv) => pv - 1)
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
            translateX: `-${index * 33}%`,
        }}
        transition={OPTIONS}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <Images imgs={imgs}/>
      </motion.div>
    </div>
  )
}

export default Carousel
