import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { Navbar, PagesTitle, Carousel, Info, CompanyInfo, DualSection, Footer, Loading , Cta} from '../components'
import { gallery } from '../constants/data';
import images from '../constants/images';
import { AnimatePresence } from 'framer-motion';

const AboutPage = () => {

  const [loading, setLoading] = useState(true);
  const [startVisible, setStartVisible] = useState(true);
  const active = 1;
  const pageTitle = "Sobre Nosotros";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    setTimeout(() => {
      setLoading(false)
      setStartVisible(false)
    }, 500)
  },[])

  return (
    <>
      <Helmet>
        <title>Nosotros | Canteras El Bajo</title>
        <meta name='description' content="Somos una empresa con 20 años de experiencia en la extracción de áridos y piedras, destacando por calidad y fiabilidad."/>
      </Helmet>
      
      <Navbar passActive={active} setLoading={setLoading} page={pageTitle}/>
      <PagesTitle title='Nosotros' loading={loading} />
      <Carousel imgs={gallery} />
      <Info 
        border={true}
        text='Somos una empresa con 20 años de experiencia en la 
        extracción de áridos y piedras, colaborando en numerosos proyectos junto a 
        otras empresas del sector. Nuestra trayectoria destaca por la calidad, fiabilidad 
        y compromiso en cada proyecto.'/>
      <DualSection 
        h3='Productos'
        h2='Descubre lo que ofrecemos'
        img={images.Foto16}
        btn='Ver Productos'
        href='/productos'
        setLoading={setLoading}
      />
      <CompanyInfo setLoading={setLoading} />
      <DualSection 
        h3='Contacto' 
        h2='Ponte en Contacto con Nosotros' 
        img={images.Foto17}
        btn='Hablemos'
        href='/contacto'
        setLoading={setLoading}
        alt={true}
      />
      <Footer />
      <Cta />
      <AnimatePresence mode='wait'>
        {loading && (<Loading startVisible={startVisible}/>)}
      </AnimatePresence>  
    </>
  )
}

export default AboutPage
