import { useEffect, useRef } from 'react'
import './pagesTitle.css'
import { motion } from 'framer-motion';

const PagesTitle = ({ title, alt, loading }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const resizeText = () => {
      // ancho disponible real (sin padding del contenedor)
      const cs = getComputedStyle(container);
      const available =
        container.clientWidth -
        parseFloat(cs.paddingLeft) -
        parseFloat(cs.paddingRight);

      // medimos con un tamaño de referencia
      const REF = 100;
      text.style.fontSize = REF + 'px';
      const textWidth = text.getBoundingClientRect().width;

      if (textWidth > 0) {
        text.style.fontSize = (available / textWidth) * REF + 'px';
      }
    };

    resizeText();
    // re-medir cuando la fuente termine de cargar
    document.fonts?.ready.then(resizeText);

    const ro = new ResizeObserver(resizeText);
    ro.observe(container);

    return () => ro.disconnect();
  }, [title]);

  return (
    <section className={alt ? 'pagesHero pagesHero__alt' : 'pagesHero'}>
      <motion.div
        className='pagesTitle__loading'
        initial={{ x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        animate={{ x: '100%' }}
      />
      <div className='pagesHero__title' ref={containerRef}>
        <h1 ref={textRef}>{title}</h1>
      </div>
    </section>
  )
}

export default PagesTitle
