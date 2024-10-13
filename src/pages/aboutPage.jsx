import React, { useState, useEffect } from 'react'
import { Navbar, PagesHero, Info, AboutProducts, Products, DualSection, Footer, Loading } from '../components'
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
        text='Canteras El Bajo es una empresa con 20 años de experiencia en la 
        extracción de áridos y piedras, colaborando en numerosos proyectos junto a 
        otras empresas del sector. Nuestra trayectoria destaca por la calidad, fiabilidad 
        y compromiso en cada proyecto realizado.'/>
      <AboutProducts />
      
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
