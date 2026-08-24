import './hero.css'
import { HeroSlider } from '../../subcomponents'
import { gallery } from '../../constants/data'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__data'>
        <h1>CANTERAS EL BAJO</h1>
      </div>
      <HeroSlider imgs={gallery} />
    </section>
  )
}

export default Hero
