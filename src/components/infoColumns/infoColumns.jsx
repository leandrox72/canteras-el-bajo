import './infoColumns.css'
import { SectionH2, SectionH3 } from '../../subcomponents'
import { generalData } from '../../constants/data'
import { useNavigate } from 'react-router'

const CompanyInfo = ({ setLoading }) => {

  const navigate = useNavigate()

  const loading = ( href ) => {
    setLoading(true)

    setTimeout(() => {
      navigate(href)
   }, 500)
  }

  return (
    <section className='infoColumns'>
      <SectionH3 title='Informacion' />
      <SectionH2 text='Informacion General'/>
      <div className='infoColumns__data'>
        <div>
          <h4 className='infoColumns__data-h4'>Productos</h4>
          <ul className='infoColumns__data-ul'>
            {generalData[0].map((prod) => (
              <li 
                key={prod.id} 
              >{prod.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className='infoColumns__data-h4'>Contacto</h4>
          <div className='infoColumns__data-div'>
            <p>Puedes comunicarte por <a href="mailto:gmcanteras@gmail.com" target="_blank" rel="noopener noreferrer"> 
              correo electrónico</a>, <a href='https://wa.me/5403518762106' target="_blank" rel="noopener noreferrer">teléfono</a> o 
              a travez de nuestro <span onClick={() => loading('/contacto')}>formulario</span></p>
          </div>
        </div>
        <div>
          <h4 className='infoColumns__data-h4'>Ubicacion</h4>
          <ul className='infoColumns__data-ul'>
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
