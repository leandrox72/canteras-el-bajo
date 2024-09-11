import React, { useEffect, useState } from 'react'
import { Navbar, Hero, Products, About, Footer, Loading, DualSection } from '../components'
import images from '../constants/images';

const HomePage = () => {

  const [ loading, setLoading ] = useState(true);
  const active = 3;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  })

  return (
    <>
      <Navbar passActive={active} setLoading={setLoading}/>
      <Hero />
      <About 
        title='20 años de experiencia y excelencia'
        text='Nuestra empresa es un referente en la industria Argentina, con una multitud de proyectos
              encabezados por nosotros.'
      />
      <Products setLoading={setLoading} />
      <About 
        title='Liderando el mercado con calidad insuperable'
        text='Cada material que extraemos refleja nuestro compromiso con la excelencia, 
              garantizando productos superiores. 
              Con nosotros, obtienes la garantía de estar trabajando 
              con los mejores en la industria.'
        alt={true}
      />
      <DualSection 
        h3='Nosotros'
        h2='Nuestra Empresa'
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
        h2='Hablemos' 
        img={images.Foto17}
        btn='Hablemos'
        href='/contacto'
        setLoading={setLoading}
      />
      <Footer />
      <Loading change={loading ? false : true}/>
    </>
  )
}

export default HomePage
