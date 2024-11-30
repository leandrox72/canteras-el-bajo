import React, { useEffect, useState } from 'react'
import { Navbar, Hero, About, Footer, Loading, DualSection } from '../components'
import images from '../constants/images';
import { AnimatePresence } from 'framer-motion';

const HomePage = () => {

  const [ loading, setLoading ] = useState(true);
  const active = 0;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      window.scrollTo({ top: 0, left: 0 });
    }, 500)
  },[])

  return (
    <>
      <Navbar passActive={active} setLoading={setLoading}/>
      <Hero />
      <About 
        title='Liderando el mercado con calidad insuperable'
        text='Cada material que extraemos refleja nuestro compromiso con la excelencia, 
              garantizando productos superiores.'
      />
      <DualSection 
        h3='Productos'
        h2='Descubre lo que ofrecemos'
        img={images.Foto16}
        btn='Ver Productos'
        href='/productos'
        setLoading={setLoading}
      />
      <About 
        title='20 años de experiencia y excelencia'
        text='Nuestra empresa es un referente en la industria Argentina, con una multitud de 
              proyectos encabezados por nosotros.'
        alt={true}
      />
      <DualSection 
        h3='Quienes Somos'
        h2='Conoce a Nuestra Empresa'
        img={images.Foto1}
        btn='Nuestra Empresa'
        href='/nosotros'
        setLoading={setLoading}
        alt={true}
      />
      <About 
        title='20 años de experiencia y excelencia'
        text='Nuestra empresa es un referente en la industria Argentina, con una multitud de proyectos
              encabezados por nosotros.'
      />
      <DualSection 
        h3='Contacto' 
        h2='Ponte en Contacto con Nosotros' 
        img={images.Foto17}
        btn='Hablemos'
        href='/contacto'
        setLoading={setLoading}
      />
      <Footer />
      <AnimatePresence mode='wait'>
        {loading && (<Loading />)}
      </AnimatePresence>  
    </>
  )
}

export default HomePage
