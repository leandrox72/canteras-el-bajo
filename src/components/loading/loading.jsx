import React from 'react'
import './loading.css'

const Loading = ({ change }) => {
  return (
    <div className={change ? 'loading loading__change' : 'loading'}>
      <div />
      <div />
    </div>
  )
}

export default Loading
