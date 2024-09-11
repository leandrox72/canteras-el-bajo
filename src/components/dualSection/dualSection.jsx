import React from 'react'
import './dualSection.css'
import { SectionH2, SectionH3, Button } from '../../subcomponents'

const DualSection = ({ h3, h2, btn, href, setLoading, img, alt }) => {
  return (
    <section className={alt ? 'dual dual__alt' : 'dual'}>
      <div className='dual__data'>
        <div>  
          <SectionH3 title={h3}/>
          <SectionH2 text={h2}/>
        </div>
        <Button text={btn} href={href} setLoading={setLoading}/>
      </div>
      <div className='dual__img'>
        <img src={img} />
      </div>
    </section>
  )
}

export default DualSection
