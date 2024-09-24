import style from './fundamentos.module.css'

export default function Cabecalho(props) {
const {titulo, descricao} = props

  return (
    <>
    <h1 style={{textAlign: 'center'}}>{titulo}</h1>
    <p style={{}}>{descricao}</p>
    <hr/>
    </>
  )
}
