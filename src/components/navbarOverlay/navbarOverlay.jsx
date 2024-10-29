import React from 'react'
import './navbarOverlay.css'
import { motion } from 'framer-motion'
import { pages } from '../../constants/data'
import { NavbarLink } from '../../subcomponents'

const NavbarOverlay = ({ passActive, setLoading }) => {

  return (
    <motion.div 
      className='navbar__overlay'
      initial={{
        height: 0,
        y: -4
      }}
      animate={{
        height: "100vh",
        y: 0
      }}
      exit={{
        height: 0,
        y: -4
      }}
      transition={{
        duration: .5,
      }}
    >
      <ul className='navbar__overlay-links'>
        {pages.map((link) => (
          <NavbarLink 
            key={link.id}
            id={link.id}
            title={link.title}
            href={link.href}
            setLoading={setLoading}
            passActive={passActive}   
          />
        ))}
      </ul>
    </motion.div>
  )
}

export default NavbarOverlay
