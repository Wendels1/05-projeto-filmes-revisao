import React from 'react'

export default function ImagemAletoria() {

    const NumeroAleatorio = Math.random() *200 +1;

    

    

  return (
    <>
        <h3>Imagem Aleatória</h3>
        <img src='https://picsum.photos/200'/>
    </>
  )
}
