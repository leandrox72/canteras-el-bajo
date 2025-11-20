import { useState } from 'react'
import './navbar.css'
import { useNavigate } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import { NavbarOverlay } from '../../components'
import { pages } from '../../constants/data'
import { Logo } from '../../constants/images'

const Navbar = ({ passActive, setLoading, page }) => {

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
    <nav className={!change && passActive == 0 ? 'navbar navbar__hide' : 'navbar'}>
      <div className='navbar__cont'>
        <img src={Logo} className='navbar__logo-icon'/>
        <h3 
          className={passActive == 3 ? 'navbar__logo logo__active' : 'navbar__logo'} 
          onClick={() => passActive != 0 && loading('/')}
        >Canteras El Bajo</h3>
        <p>{page}</p>
      </div>
      <ul className='navbar__links'>
        {pages.map((link) => (
          <li 
            key={link.id} 
            onClick={() => passActive != link.id && loading(link.href)}>
              <p 
                style={{ 
                  fontStyle: passActive == link.id && 'oblique',
                  color: passActive == link.id ? '#000' : '#222'
                }}
              >{link.title}</p>
          </li>
        ))}
      </ul>
      <div className={open ? 'menu menu__open' : 'menu'} onClick={() => setOpen(!open)}>
        <h4>{open ? 'Cerrar' : 'Menu'}</h4>
      </div>
      <AnimatePresence mode='wait'>
        {open && (
          <NavbarOverlay passActive={passActive} setLoading={setLoading} open={open} />
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
