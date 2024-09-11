import React, { useState, useEffect } from 'react'
import { Navbar, PagesHero, Info, Products, DualSection, Footer, Loading } from '../components'
import { gallery } from '../constants/data';
import images from '../constants/images';

const AboutPage = () => {

  const [ loading, setLoading ] = useState(true);
  const active = 0;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  })

  return (
    <>
      <Navbar passActive={active} setLoading={setLoading}/>
      <PagesHero title='Canteras El Bajo' imgs={gallery} />
      <Info 
        text='Nuestra empresa es una referente de la industria de la
              construccion argentina gracias a nuestros mas de 20 años de experiencia.'/>
      <Products setLoading={setLoading} />
      <Info 
        text='Nuestra empresa es una referente de la industria de la
              construccion argentina gracias a nuestros mas de 20 años de experiencia.'/>
      <DualSection 
        h3='Contacto' 
        h2='Hablemos' 
        img={images.Foto17}
        btn='Hablemos'
        href='/contacto'
        setLoading={setLoading}
        alt={true}
      />
      <Footer />
      <Loading change={loading ? false : true}/>
    </>
  )
}

export default AboutPage
