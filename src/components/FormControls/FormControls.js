import React from 'react'
import './FormControls.css'

export const Textarea = ({ input, meta, child, ...props }) => {
  console.log('meta' + meta.error + meta.touched)
  const notValid = meta.error && meta.touched ? 'error' : ''
  return (
    <div className={notValid}>
      <textarea {...input} {...props} />
      <span className="error__message">{meta.error}</span>
    </div>
  )
}

export const Input = ({ input, meta, child, ...props }) => {
  const notValid = meta.error && meta.touched ? 'error' : ''
  return (
    <div className={notValid}>
      <input {...input} {...props} />
      <span className="error__message">{meta.error}</span>
    </div>
  )
}
