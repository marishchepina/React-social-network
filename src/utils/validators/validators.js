import React from 'react'

export const required = (value) => {
  return value ? undefined : 'Field is requiered'
}

export const maxLengthCreator = (maxLength) => (value) => {
  return value.length > maxLength
    ? `Max length is ${maxLength} symbols`
    : undefined
}
