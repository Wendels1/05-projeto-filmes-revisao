import React from 'react'

export default function Familia(props) {

    const { nomeFamilia } = props

  return (
    <>
    <h3>Familia: {nomeFamilia}</h3>
    {props.children}
    </>
  )
}
