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
    <motion.button 
      className={passActive == id ? 'navbarLink link__active' : 'navbarLink'} 
      key={id}
      type='button'
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
      <h4>{title}</h4>
    </motion.button>
  )
}

export default NavbarLink
