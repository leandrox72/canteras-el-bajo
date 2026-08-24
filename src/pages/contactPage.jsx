import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { Navbar, PagesTitle, Footer, Loading, ContactForm } from '../components'
import { AnimatePresence } from 'framer-motion';

const ContactPage = () => {

  const [ loading, setLoading ] = useState(true);
  const active = 3;
  const pageTitle = "Contacto";

  useEffect(() => {   
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0 });
      setLoading(false)
    }, 500)
  },[])

  return (
    <>
      <Helmet>
        <title>Contacto | Canteras El Bajo</title>
        <meta
          name='description'
          content="Ponte en contacto con nosotros"
        />
      </Helmet>

      <Navbar passActive={active} setLoading={setLoading} page={pageTitle}/>
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
