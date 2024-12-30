import React, { useEffect, useState } from 'react'
import './images.css'

const Images = ({ imgs }) => {

  return (
    <>
      {imgs.map((img, idx) => (
        <div 
          key={idx}
          className='image'
          style={{
            backgroundImage: `url(${img})`
          }}
        />
      ))}
    </>
  )
}

export default Images
