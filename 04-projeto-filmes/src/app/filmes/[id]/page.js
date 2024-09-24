'use client'

import apiFilmes from '@/app/apis/apiFilmes'
import Pagina from '../../components/Pagina'
import React, { useEffect, useState } from 'react'
import {CardImg, Col, Row} from 'react-bootstrap'

export default function page(props) {
  console.log(props.params.id)

  const [filme, setFilmes] = useState()

  useEffect(() => {
    
    // Buscar os filmes
    buscarFilmes()

  }, [])

  async function buscarFilmes(){
    const resultado = await apiFilmes.get("/movie/" + props.params.id + "?language=pt-Br")
    const filmesRecebidos = resultado.data
    console.log(resultado.data)
    setFilmes(filmesRecebidos)

  }


  return (

    <Pagina titulo= "Detalhes do filme">
       
          {filme.id &&(

            <Row>
              <Col>
                <CardImg src={"https://image.tmdb.org/t/p/w500" + filme.backdrop_path} />
              </Col>
          
              <Col>

              </Col>

            </Row>
          )}
    </Pagina>

  )
}
