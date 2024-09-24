import MeuComponente from './MeuComponente';
import NumeroMaior from './NumeroMaior';
import NumeroAleatorio from './NumeroAleatorio';
import Cabecalho from './Cabecalho';
import Familia from './Familia';
import Filho from './Filho';
import ImagemAletoria from './ImagemAletoria';
import Pagina from '../components/Pagina';

export default function Fundamentos(){
    return (
        <Pagina titulo='Fundamentos'>
        <Cabecalho titulo = "Fundamentos" descricao = "Página de fundamentos de react" />


        <h2>Página Fundamentos</h2>
        <hr/>
        <MeuComponente/>
        <hr/>
        <NumeroMaior numA = {2}  numB = {10} />
        <hr/>
        <NumeroAleatorio />
        <NumeroAleatorio />
        <NumeroAleatorio />
        <NumeroAleatorio />
        <NumeroAleatorio />
        <hr/>
        <Familia nomeFamilia = "Soares">
            <Filho nome = "julia" sobrenome = "Soares"/>
            <Filho nome = "paulo" sobrenome = "Soares"/>
            <Filho nome = "guilherme" sobrenome = "Soares"/>
            <Filho nome = "joão" sobrenome = "Soares"/>

        </Familia>

        <Familia nomeFamilia = "Xororós">
            <Filho nome = "junin" sobrenome = "Xororós"/>
            <Filho nome = "joana" sobrenome = "Xororós"/>
            <Filho nome = "jackson" sobrenome = "Xororós"/>
            <Filho nome = "japinha" sobrenome = "Xororós"/>
        </Familia>

        <hr/>
        <ImagemAletoria />
        </Pagina>
    )
}