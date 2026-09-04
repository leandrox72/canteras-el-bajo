import './navbarOverlay.css'
import { motion } from 'framer-motion'
import { pages } from '../../constants/data'
import { NavbarLink } from '../../subcomponents'

const NavbarOverlay = ({ passActive, setLoading }) => {

  return (
    <motion.div 
      className='navbar__overlay'
      initial={{
        height: "66px",
        y: -4
      }}
      animate={{
        height: "calc(100vh + var(--border-size))",
        y: 0
      }}
      exit={{
        height: "67px",
      }}
      transition={{
        duration: .5,
      }}
    >
      <ul className='navbar__overlay-links'>
        {pages.map((link, idx) => (
          <motion.li
            key={idx}
          >
            <NavbarLink 
              key={link.id}
              id={link.id}
              title={link.title}
              href={link.href}
              setLoading={setLoading}
              passActive={passActive}   
            />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default NavbarOverlay
