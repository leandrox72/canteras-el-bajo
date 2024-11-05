import React from 'react'
import './info.css'

const Info = ({ text, border }) => {
  return (
    <section className={border ? 'info info__border' : 'info'}>
      <p>{text}</p>
    </section>
  )
}

export default Info
