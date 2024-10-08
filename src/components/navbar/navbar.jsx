import React, { useState } from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { NavbarOverlay } from '../../subcomponents'

const Navbar = ({ passActive, setLoading }) => {

  const [ change, setChange ] = useState(false);
  const [ open, setOpen ] = useState(false);
  const navigate = useNavigate()

  const loading = ( href ) => {
    setLoading(true)

    setTimeout(() => {
      navigate(href)
   }, 500)
  }

  const scrollChange = () => {
    if (window.scrollY >= 150) {
        setChange(true)
    }
    else {
        setChange(false)
    }
  }

  window.addEventListener('scroll', scrollChange);

  return (
    <nav className={!change && passActive == 3 ? 'navbar navbar__hide' : 'navbar'}>
      <h3 className={passActive == 3 ? 'navbar__logo logo__active' : 'navbar__logo'} onClick={() => {loading('/'), setOpen(false)}}>Canteras El Bajo</h3>
      <div className={open ? 'menu menu__open' : 'menu'} onClick={() => setOpen(!open)}>
        <h4>Menu</h4>
      </div>
      <div className={open ? 'menu__mobile menu__mobile-open' : 'menu__mobile'} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </div>
      <AnimatePresence mode='wait'>
        {open && (
          <NavbarOverlay passActive={passActive} setLoading={setLoading}/>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
