import React from 'react'
import './navbarOverlay.css'
import { motion } from 'framer-motion'
import { pages } from '../../constants/data'
import { useNavigate } from 'react-router-dom'

const NavbarOverlay = ({ passActive, setLoading }) => {

    const navigate = useNavigate()

    const loading = ( href ) => {
      setLoading(true)
  
      setTimeout(() => {
        navigate(href)
     },500)
    }

  return (
    <motion.div 
      className='navbar__overlay'
      initial={{
        x: 650,
      }}
      animate={{
        x: 0,
      }}
      exit={{
        x: 650,
      }}
      transition={{
        duration: .25,
        ease: 'easeIn'
      }}
    >
      <ul className='navbar__overlay-links'>
        {pages.map((link) => (
          <li key={link.id} onClick={() => loading(link.href)}
            className={passActive == link.id ? 'navbar__overlay-links_link link__active' : 'navbar__overlay-links_link'}
          >
            <h4>{link.title}</h4><span />
            <p>|{link.subtitle}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default NavbarOverlay
