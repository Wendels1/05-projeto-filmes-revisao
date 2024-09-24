import React from 'react'

export default function Filho(props) {
    const{nome, sobrenome} = props
  return (
    <>
    <p>{nome} {sobrenome}</p>
    </>
  )
}
