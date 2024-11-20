import React from 'react'
import './hero.css'
import { Foto3 } from '../../constants/images'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

const Hero = () => {

  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText)
    }
  },[])

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      }
      else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px"
  }

  return (
    <section className='hero'>
      <div className='hero__data' ref={containerRef}>
        <span ref={textRef}>CANTERAS EL BAJO</span>
      </div>
      <div className='hero__bg'>
        <span className='hero__bg-overlay'/>
        <img src={Foto3} />
      </div>
    </section>
  )
}

export default Hero
