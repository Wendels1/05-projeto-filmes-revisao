import { Row, Table } from 'react-bootstrap' 
import Pagina from '../components/Pagina'

export default function pages() {
    const carros = ["HB20", "Palio", "Onix", "Arge"]
  return (
    
    <Pagina titulo='Listas'>
        
        {carros.map(carro => {
            return <p>{carros}</p>
            
        })}
   
    </Pagina>
  )
}
