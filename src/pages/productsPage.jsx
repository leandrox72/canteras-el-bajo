import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { Navbar, PagesTitle, Carousel, Info, DualSection, Footer, Loading, Products } from '../components'
import images from '../constants/images';
import { AnimatePresence } from 'framer-motion';
import { gallery2 } from '../constants/data';

const ProductsPage = () => {

  const [loading, setLoading] = useState(true);
  const [startVisible, setStartVisible] = useState(true);
  const active = 2;
  const pageTitle = "Productos";

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
        <title>Productos | Canteras El Bajo</title>
        <meta
          name='description'
          content="Trabajamos con vos de principio a fin, para transformar 
          sus visiones en obras completas"
        />
      </Helmet>
      
      <Navbar passActive={active} setLoading={setLoading} page={pageTitle}/>
      <PagesTitle title='Productos' />
      <Carousel imgs={gallery2} />
      <Info 
        text='Desde proyectos pequeños hasta de gran escala, trabajamos 
        con vos de principio a fin, para transformar sus visiones en obras 
        completas. Aquí tienes nuestra selección de productos 
        que ofrecemos a nuestros clientes.'
      />
      <Products />
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
        {loading && (<Loading startVisible={startVisible}/>)}
      </AnimatePresence>  
    </>
  )
}

export default ProductsPage
