import React, { useEffect, useRef, useState } from 'react'
import './form.css'

const Form = () => {

  const initialValues = { user__name: "", user__email: "", user__msg: "" }
  const [ values, setValues ] = useState(initialValues)
  const [ errors, setErrors ] = useState({})
  const [ submit, setSubmit ] = useState(false)
  const [ product, setProduct ] = useState('')
  const [ sended, setSended ] = useState(false)
  const form = useRef()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values))
    setSubmit(true)
  }

  const validate = () => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    if(!values.user__name) {
      errors.user__name = "Su nombre es requerido"
    }
    if(!values.user__email) {
      errors.user__email = "Su e-mail es requerido"
    }
    else if (!regex.test(values.user__email)) {
      errors.user__email = "Su e-mail debe ser valido"
    }
    if(!values.user__msg) {
      errors.user__msg = "Su mensaje es requerido"
    }
    return errors
  }

  useEffect(() => {
    setValues({...values, product: product})
  },[product])

  useEffect(() => {
    if(Object.keys(errors).length === 0 && submit) {
      console.log(values)
    }
  },[errors])

  return (
    <form className='form' ref={form}>
      <input 
        type='text'
        name='user__name'
        placeholder='nombre'
        className='form__input'
        value={values.name}
        onChange={handleChange}
      />
      <p className='form__error'>{ errors.user__name }</p>
      <input 
        type='email'
        name='user__email'
        placeholder='email'
        className='form__input'
        value={values.email}
        onChange={handleChange}
      />
      <p className='form__error'>{ errors.user__email }</p>
      <input 
        className='form__input'
      />
      <p></p>
      <textarea 
        name='user__msg'
        placeholder='mensaje'
        className='form__textarea'
        value={values.msg}
        onChange={handleChange}
      />
      <p className='form__error'>{ errors.user__msg }</p>
      <div className='form__btn' onClick={handleSubmit}>
        <h1>Enviar</h1>
      </div>
    </form>
  )
}

export default Form
