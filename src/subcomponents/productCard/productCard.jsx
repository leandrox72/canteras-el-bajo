import React from 'react'
import './productCard.css'
import { useNavigate } from 'react-router-dom'

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
        <p>Conocer Mas</p>
      </div>
    </div>
  )
}

export default ProductCard
