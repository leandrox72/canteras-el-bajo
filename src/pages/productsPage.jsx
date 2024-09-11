import React, { useState, useEffect } from 'react'
import { Navbar, PagesHero, ProductsInfo, DualSection, Footer, Loading } from '../components'
import { products } from '../constants/data';
import images from '../constants/images';

const ProductsPage = () => {

  const [ loading, setLoading ] = useState(true);
  const active = 1;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  })

  return (
    <>
      <Navbar passActive={active} setLoading={setLoading}/>
      <PagesHero title='Productos' imgs={products}/>
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
