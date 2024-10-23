import React, { useEffect, useRef } from 'react'
import './pagesTitle.css'

const PagesTitle = ({ title, alt }) => {

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
    <section className={alt ? 'pagesHero pagesHero__alt' : 'pagesHero'}>
      <div className='pagesHero__title' ref={containerRef}>
        <span ref={textRef}>
          {title}
        </span>
      </div>
    </section>
  )
}

export default PagesTitle
