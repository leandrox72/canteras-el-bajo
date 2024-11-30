import React from 'react'
import './info.css'

const Info = ({ text, border }) => {
  return (
    <section className={border ? 'info info__border' : 'info'}>
      <span>{text}</span>
    </section>
  )
}

export default Info
