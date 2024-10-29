import React, { useState, useEffect } from 'react'
import { Navbar, PagesTitle, Footer, Loading, ContactForm } from '../components'
import { AnimatePresence } from 'framer-motion';

const ContactPage = () => {

  const [ loading, setLoading ] = useState(true);
  const active = 3;

  useEffect(() => {   
    setTimeout(() => {
      setLoading(false)
      window.scrollTo({ top: 0, left: 0 });
    }, 500)
  })

  return (
    <>
      <Navbar passActive={active} setLoading={setLoading}/>
      <PagesTitle title='Contacto'/>
      <ContactForm />
      <Footer />
      <AnimatePresence mode='wait'>
        {loading && (<Loading />)}
      </AnimatePresence>  
    </>
  )
}

export default ContactPage
