import { useEffect, useRef, useState } from 'react'
import './dualSection.css'
import { SectionH2, SectionH3, Button } from '../../subcomponents'

const DualSection = ({ h3, h2, btn, href, setLoading, img, alt }) => {

  const imgRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = imgRef.current
    if (!el) return

    // Fallback por si el navegador no soporta IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target) // solo una vez
        }
      },
      { threshold: 0.05 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={alt ? 'dual dual__alt' : 'dual'}>
      <div className='dual__data'>
        <div>
          <SectionH3 title={h3} />
          <SectionH2 text={h2} />
        </div>
        <Button text={btn} href={href} setLoading={setLoading} />
      </div>
      <div className='dual__img'>
        <img
          ref={imgRef}
          className={`dual__img-el${inView ? ' is-visible' : ''}`}
          src={img}
          alt='img'
          loading='lazy'
        />
      </div>
    </section>
  )
}

export default DualSection
