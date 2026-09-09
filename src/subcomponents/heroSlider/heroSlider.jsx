import './heroSlider.css'
import { useState, useEffect } from 'react'

const HeroSlider = ({ imgs, interval = 5000 }) => {

  const [ currentIndex, setCurrentIndex ] = useState(0)

  // Precarga todas las imágenes para evitar parpadeos en el primer ciclo
  useEffect(() => {
    imgs.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [imgs])

  // Avanza el índice cada "interval" ms. Al ser un único estado,
  // no hay nada que se pueda desincronizar entre renders.
  useEffect(() => {
    if (!imgs || imgs.length < 2) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imgs.length)
    }, interval)

    return () => clearInterval(timer)
  }, [imgs, interval])

  return (
    <div className='hero__slider'>
      <span className='slider__overlay' />
      {imgs.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt=''
          className='slide'
          style={{ opacity: idx === currentIndex ? 1 : 0 }}
        />
      ))}
    </div>
  )
}

export default HeroSlider
