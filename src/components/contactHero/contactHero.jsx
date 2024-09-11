import React from 'react'
import './contactHero.css'
import { Form } from '../../subcomponents'

const ContactHero = () => {
  return (
    <section className='contactHero'>
      <div className='contactHero__data'>
        <h3>Contactanos</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Alias cumque quos, nulla eius similique, id enim vel voluptas 
            maxime dolores hic quibusdam quisquam ipsum deleniti! Vitae sit 
            voluptatibus odio rerum!</p>
      </div>
      <div className='contactHero__form'>
        <Form />
      </div>
    </section>
  )
}

export default ContactHero
