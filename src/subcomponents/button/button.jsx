import React from 'react'
import './button.css'
import { Link, useNavigate } from 'react-router-dom';


const Button = ({ text, href, setLoading }) => {

  const navigate = useNavigate()

  const loading = ( href ) => {
    setLoading(true)
    setTimeout(() => {
      navigate(href)
    },[500])
  }
 
  return (
    <Link className='button' onClick={() => loading(href)}>
      <p className='button__p'>{text}</p>
      <div className='button__bg'>
        
      </div>
    </Link>
  )
}

export default Button
