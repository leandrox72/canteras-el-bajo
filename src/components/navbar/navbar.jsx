import { useState } from 'react'
import './navbar.css'
import { useNavigate } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import { NavbarOverlay } from '../../components'
import { pages } from '../../constants/data'
import { Logo } from '../../constants/images'
import { useEffect } from 'react'

const Navbar = ({ passActive, setLoading, page }) => {

  const [ change, setChange ] = useState(false);
  const [ open, setOpen ] = useState(false);
  const navigate = useNavigate()

  const loading = (href) => {
    setLoading(true)

    setTimeout(() => {
      navigate(href)
   }, 500)
  }

  useEffect(() => {
    const scrollChange = () => setChange(window.scrollY >= 150);
    window.addEventListener('scroll', scrollChange);
    return () => window.removeEventListener('scroll', scrollChange)
  }, []);

  return (
    <nav className={!change && passActive == 0 ? 'navbar navbar__hide' : 'navbar'}>
      <div className='navbar__cont'>
        <button
          type='button'
          onClick={() => passActive != 0 && loading('/')}
          disabled={passActive == 0}
        >
          <img src={Logo} className='navbar__logo-icon' alt='canteras-el-bajo-logo'/>
          <h3 className='navbar__logo'>Canteras El Bajo</h3>
        </button>
        <p>{page}</p>
      </div>
      <ul className='navbar__links'>
        {pages.slice(0,3).map((link) => (
          <button 
            key={link.id} 
            type='button'
            onClick={() => passActive != link.id && loading(link.href)}>
              <p 
                style={{ 
                  fontStyle: passActive == link.id && 'oblique',
                  color: passActive == link.id ? '#000' : '#222'
                }}
              >{link.title}</p>
          </button>
        ))}
        <button type='button' onClick={() => passActive != pages[3].id && loading(pages[3].href)}>
          <p style={{ fontStyle: passActive == pages[3].id && 'oblique',
            color: passActive == pages[3].id ? '#000' : '#222'}}
          >{pages[3].title}
          </p>
        </button>
      </ul>
      <button className={open ? 'menu menu__open' : 'menu'} onClick={() => setOpen(!open)} type='button'>
        <h4>{open ? 'Cerrar' : 'Menu'}</h4>
      </button>
      <AnimatePresence mode='wait'>
        {open && (
          <NavbarOverlay passActive={passActive} setLoading={setLoading} open={open} />
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
