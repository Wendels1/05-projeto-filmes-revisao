import { useEffect, useEffect} from 'react'
import Pagina from './components/Pagina'
import axios from 'axios'

export default function page() {
    useEffect(() =>{
        axios.get('https://dummyjson.com/users').then(resposta => {
            console.log(resposta)
        })
    })
  return (
    <Pagina titulo="Consumo de AP's">

    </Pagina>
  )
}
