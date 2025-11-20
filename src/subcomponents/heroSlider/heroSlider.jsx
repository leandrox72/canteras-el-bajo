import './heroSlider.css'
import { useState, useEffect } from 'react'

const HeroSlider = ({ imgs, interval = 5000 }) => {
  
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ nextIndex, setNextIndex ] = useState(1);
  const [ fade, setFade ] = useState(false)

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
    const timer = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imgs.length);
        setNextIndex((prevIndex) => (prevIndex + 1) % imgs.length);
        setFade(false);
      }, interval / 2)
    }, interval)

    return () => clearInterval(timer)
  }, [imgs, interval])

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
