import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Botoes() {
    

  return (

    
    <div className='botoes'>

        <h1> Escolha uma das opções para doação a baixo</h1>

        <div className='div-botao'>
            <Button className='botao'>  <Link to = '/Pix' className='li-link'> Pix </Link></Button>
        </div>

        <div className='div-botao'>
            <Button className='botao'>  <Link to = '/Cartao' className='li-link'> Cartão </Link></Button>
        </div>

        <div className='div-botao'>
            <Button className='botao'>  <Link to = '/Boleto' className='li-link'> Boleto </Link></Button>
        </div>


    </div>
    
  );
}

export default Botoes;