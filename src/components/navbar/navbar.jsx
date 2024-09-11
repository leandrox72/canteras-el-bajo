import React, { useState } from 'react'
import './navbar.css'
import { pages } from '../../constants/data'
import { useNavigate } from 'react-router-dom'

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
      <ul className='navbar__links'>
        {pages.map((link) => (
            <li 
              key={link.id} 
              className={passActive == link.id ? 'navbar__links-link link__active' : 'navbar__links-link'}
              onClick={() => loading(link.href)}
            >{link.name}</li>
        ))}
      </ul>
      <div className={open ? 'hamburger hamburger__open' : 'hamburger'} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </div>
      <div className={open ? 'navbar__overlay-show navbar__overlay' : 'navbar__overlay'}>
        <ul className='navbar__overlay-links'>
          {pages.map((link) => (
              <li 
                key={link.id} 
                className={passActive == link.id ? 'navbar__overlay-links_link link__active' : 'navbar__overlay-links_link'}
                onClick={() => loading(link.href)}
              >{link.name}</li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
