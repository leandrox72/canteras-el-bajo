import React from 'react'
import './footer.css'
import { footerData } from '../../constants/data'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__data'>
        {footerData.map((column) => (
          <div key={column.line1}>
            <p>{column.line1}</p>
            <p>{column.line2}</p>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
