

export default function NumeroMaior(props){

   const getMaior = () =>{
    if(props.numA > props.numB){
        return props.numA
    }
    if(props.numB > props.numA){
        return props.numB
    }
    
   }
   
    return (
        <>
            <h2>Componente Número Maior</h2>
            <p>Número recebidos: {props.mumA}  {props.mumB}</p>
            <p> O número maior é: {getMaior()}</p>
            
        </>
    )
}