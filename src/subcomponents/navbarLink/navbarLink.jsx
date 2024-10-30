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
      onClick={() => {passActive != id && loading(href)}}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: .5 + id * .2,
        }
      }}
      exit={{
        opacity: 0,
      }}
    >
      <motion.div 
        className='navbarLink__transition'
        initial={{
          opacity: 1
        }}
        animate={{
          opacity: 1,
          x: "100%",
          transition: {
            delay: .5 + id * .2,
          }
        }}
        exit={{
          opacity: 1,
          x: "100%"
        }}
      />
      <h4>{title}</h4>
    </motion.li>
  )
}

export default NavbarLink
