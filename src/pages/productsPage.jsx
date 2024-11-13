import React, { useState, useEffect } from 'react'
import { Navbar, PagesTitle, Carousel, Info, DualSection, Footer, Loading, Products, ProductInfo } from '../components'
import images from '../constants/images';
import { AnimatePresence } from 'framer-motion';
import { gallery2 } from '../constants/data';
import { products } from '../constants/data';

const ProductsPage = () => {

  const [ loading, setLoading ] = useState(true);
  const [ product, setProduct ] = useState()
  const [ open, setOpen ] = useState(false)
  const active = 2;

  const openAndSelect = (id) => {
    setOpen(true)
    setProduct(products[id])
  }

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
      <Products setOpen={setOpen} openAndSelect={openAndSelect} />
      <ProductInfo product={product} open={open} setOpen={setOpen}/>
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
