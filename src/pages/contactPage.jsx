import React, { useState, useEffect } from 'react'
import { Navbar, PagesTitle, Footer, Loading, ContactForm } from '../components'

const ContactPage = () => {

  const [ loading, setLoading ] = useState(true);
  const active = 2;

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
      <Loading change={loading ? false : true}/>
    </>
  )
}

export default ContactPage
