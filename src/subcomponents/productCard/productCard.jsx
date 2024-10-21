import React from 'react'
import './productCard.css'
import { useNavigate } from 'react-router-dom'
import { FaArrowDown } from "react-icons/fa";

const ProductCard = ({ id, name, img, setLoading }) => {

  const navigate = useNavigate()

  const loading = () => {
    setLoading(true)

    setTimeout(() => {
      navigate('/productos', {state: {id}})
    }, 500)

  }

  return (
    <div className='productCard' onClick={loading}>
      <div className='productCard__img'>
        <img src={img} />
      </div>
      <div className='productCard__data'>
        <h4>{name}</h4>
        <div className='productCard__data-btn'>
          <p>Ver</p>
          <div className='btn__icon-cont'>
            <FaArrowDown className='btn__icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
