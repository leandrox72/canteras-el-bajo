import React from 'react'
import './button.css'
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowDown } from "react-icons/fa";

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
      <div className='button__icon-cont'>
        <FaArrowDown className='button__icon'/>
      </div>
    </Link>
  )
}

export default Button
