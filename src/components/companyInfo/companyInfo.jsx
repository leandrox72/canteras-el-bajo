import React from 'react'
import './companyInfo.css'
import { SectionH2, SectionH3 } from '../../subcomponents'
import { generalData } from '../../constants/data'

const CompanyInfo = () => {

  return (
    <section className='companyInfo'>
      <SectionH3 title='Informacion' />
      <SectionH2 text='Informacion General'/>
      <div className='companyInfo__data'>
        <div>
          <h4 className='companyInfo__data-h4'>Productos</h4>
          <ul className='companyInfo__data-ul'>
            {generalData[0].map((prod) => (
              <li 
                key={prod.id} 
              >{prod.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className='companyInfo__data-h4'>Contacto</h4>
          <ul className='companyInfo__data-ul'>
            {generalData[1].map((line) => (
              <li key={line.id}>{line.line}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className='companyInfo__data-h4'>Ubicacion</h4>
          <ul className='companyInfo__data-ul'>
            {generalData[2].map((line) => (
              <li key={line.id}>{line.line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CompanyInfo
