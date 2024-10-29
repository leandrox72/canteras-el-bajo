import React from 'react'
import './navbarLink.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const NavbarLink = ({ id, title, href, setLoading, passActive }) => {

  const navigate = useNavigate()  

  const loading = ( href ) => {
    setLoading(true)
  
    setTimeout(() => {
      navigate(href)
   },500)
  }

  return (
    <motion.li 
      className={passActive == id ? 'navbarLink link__active' : 'navbarLink'} 
      key={id}
      onClick={() => loading(href)}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      transition={{
        delay: .5 + id * .15
      }}
    >
      <h4>{title}</h4>
    </motion.li>
  )
}

export default NavbarLink
