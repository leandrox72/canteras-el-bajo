import React, { useState, useEffect } from 'react'
import { Navbar, PagesHero, Footer, Loading, ContactForm } from '../components'

const ContactPage = () => {

  const [ loading, setLoading ] = useState(true);
  const active = 2;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  })

  return (
    <>
      <Navbar passActive={active} setLoading={setLoading}/>
      <PagesHero title='Contacto'/>
      <ContactForm />
      <Footer />
      <Loading change={loading ? false : true}/>
    </>
  )
}

export default ContactPage
