import React, { useState, useEffect } from 'react'
import { Navbar, PagesTitle, ProductsInfo, Carousel, DualSection, Footer, Loading } from '../components'
import images from '../constants/images';
import { gallery } from '../constants/data';

const ProductsPage = () => {

  const [ loading, setLoading ] = useState(true);
  const active = 1;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      window.scrollTo({ top: 0, left: 0 });
    }, 500)
  })

  return (
    <>
      <Navbar passActive={active} setLoading={setLoading}/>
      <PagesTitle title='Productos' alt={true} />
      <ProductsInfo />
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

export default ProductsPage
