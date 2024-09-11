import React, { useEffect, useRef, useState } from 'react'
import './form.css'

const Form = () => {

  const initialValues = { user__name: '', user__email: '', user__product: '', user__msg: '' }
  const [ values, setValues ] = useState(initialValues)
  const [ submit, setSubmit ] = useState(false)
  const [ product, setProduct ] = useState('')
  const [ sended, setSended ] = useState(false)
  const form = useRef()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  }

  useEffect(() => {
    setValues({...values, product: product})
  },[product])

  return (
    <form className='form' ref={form}>
      <input 
        type='text'
        name='user__name'
        placeholder='Nombre'
        className='form__input'
        value={values.name}
        onChange={handleChange}
      />
      <p></p>
      <input 
        type='email'
        name='user__email'
        placeholder='Email'
        className='form__input'
        value={values.email}
        onChange={handleChange}
      />
      <p></p>
      <input 
        className='form__input'
      />
      <p></p>
      <textarea 
        type='email'
        name='user__msg'
        placeholder='Mensaje'
        className='form__textarea'
        value={values.msg}
        onChange={handleChange}
      />
      <p></p>
      <div className='form__btn'>

      </div>
    </form>
  )
}

export default Form
