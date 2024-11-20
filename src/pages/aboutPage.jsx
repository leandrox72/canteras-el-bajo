import React, { useState, useEffect } from 'react'
import { Navbar, PagesTitle, Carousel, Info, CompanyInfo, DualSection, Footer, Loading } from '../components'
import { gallery } from '../constants/data';
import images from '../constants/images';
import { AnimatePresence } from 'framer-motion';

const AboutPage = () => {

  const [ loading, setLoading ] = useState(true);
  const active = 1;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      window.scrollTo({ top: 0, left: 0 });
    }, 500)
  },[])

  return (
    <>
      <Navbar passActive={active} setLoading={setLoading}/>
      <PagesTitle title='Nosotros' loading={loading} />
      <Carousel imgs={gallery} />
      <Info 
        border={true}
        text='Somos una empresa con 20 años de experiencia en la 
        extracción de áridos y piedras, colaborando en numerosos proyectos junto a 
        otras empresas del sector. Nuestra trayectoria destaca por la calidad, fiabilidad 
        y compromiso en cada proyecto realizado.'/>
      <DualSection 
        h3='Productos'
        h2='Descubre lo que ofrecemos'
        img={images.Foto16}
        btn='Ver Productos'
        href='/productos'
        setLoading={setLoading}
      />
      <CompanyInfo />
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
      <AnimatePresence mode='wait'>
        {loading && (<Loading />)}
      </AnimatePresence>  
    </>
  )
}

export default AboutPage
