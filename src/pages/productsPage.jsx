import React, { useState, useEffect } from 'react'
import { Navbar, PagesTitle, Carousel, Info, DualSection, Footer, Loading, ProductInfo } from '../components'
import images from '../constants/images';
import { AnimatePresence } from 'framer-motion';
import { gallery2 } from '../constants/data';

const ProductsPage = () => {

  const [ loading, setLoading ] = useState(true);
  const active = 2;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      window.scrollTo({ top: 0, left: 0 });
    }, 500)
  },[])

  return (
    <>
      <Navbar passActive={active} setLoading={setLoading}/>
      <PagesTitle title='Productos' />
      <Carousel imgs={gallery2} />
      <Info 
        text='Desde proyectos pequeños hasta de gran escala, trabajamos 
        con vos de principio a fin, para transformar sus visiones en obras 
        completas. Aquí tienes nuestra selección de productos 
        que ofrecemos a nuestros clientes.'
      />
      <ProductInfo />
      <DualSection 
        h3='Contacto' 
        h2='Hablemos' 
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

export default ProductsPage
