import './heroSlider.css'
import { useState, useEffect, useRef } from 'react'

const HeroSlider = ({ imgs, interval = 5000 }) => {

  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ nextIndex, setNextIndex ] = useState(1);
  const [ fade, setFade ] = useState(false)

  const imgsRef = useRef(imgs);
  useEffect(() => {
    imgsRef.current = imgs
  }, [imgs]);

  useEffect(() => {
    const preloadImages = () => {
      imgs.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    preloadImages()
  },[imgs])

  useEffect(() => {
    let fadeTimeout;
    
    const timer = setInterval(() => {
      setFade(true);
      fadeTimeout = setTimeout(() => {
        const len = imgsRef.current.length
        setCurrentIndex((prevIndex) => (prevIndex + 1) % len);
        setNextIndex((prevIndex) => (prevIndex + 1) % len);
        setFade(false);      
      }, interval / 2)
    }, interval)

    return () => {
      clearInterval(timer)
      clearTimeout(fadeTimeout)
    }
  }, [interval])

  return (
    <div className='hero__slider'>
      <span className='slider__overlay'/>
      <div
        className={`slide ${fade ? 'fade__out' : 'fade__in'}`}
        style={{ backgroundImage: `url(${imgs[currentIndex]})` }}
      />
      <div
        className='slide'
        style={{ backgroundImage: `url(${imgs[nextIndex]})` }}
      />
    </div>
  )
}

export default HeroSlider
