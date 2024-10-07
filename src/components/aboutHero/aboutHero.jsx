import React from 'react'
import './aboutHero.css'
import { gallery } from '../../constants/data'

const AboutHero = () => {

  const [ img, setImg ] = useState(0)

  return (
    <section className='aboutHero'>
      <h3>Canteras El Bajo</h3>
      <div className='aboutHero__gallery'>
        <img src={gallery[img]} />
        <div className='gallery__btns'>

        </div>
      </div>
    </section>
  )
}

export default AboutHero
