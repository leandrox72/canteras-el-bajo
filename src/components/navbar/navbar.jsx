import React, { useState } from 'react'
import './navbar.css'
import { pages } from '../../constants/data'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ passActive, setLoading }) => {

  const [ change, setChange ] = useState(false);
  const [ open, setOpen ] = useState(false);
  const navigate = useNavigate()

  const loading = ( href ) => {
    setLoading(true)

    setTimeout(() => {
      navigate(href)
   },500)
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
      <h3 className={passActive == 3 ? 'navbar__logo logo__active' : 'navbar__logo'} onClick={() => loading('/')}>Canteras El Bajo</h3>
      <div className={open ? 'menu menu__open' : 'menu'} onClick={() => setOpen(!open)}>
        <h4>Menu</h4>
      </div>
      <AnimatePresence mode='wait'>
        {open && (
          <motion.div 
            className='navbar__overlay'
            initial={{
              x: 650
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: 650
            }}
            transition={{
              duration: .25,
              ease: 'easeInOut'
            }}
          >
            <ul className='navbar__overlay-links'>
              {pages.map((link) => (
                <li 
                  key={link.id} 
                  className={passActive == link.id ? 'navbar__overlay-links_link link__active' : 'navbar__overlay-links_link'}
                  onClick={() => loading(link.href)}
                >{link.name}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
