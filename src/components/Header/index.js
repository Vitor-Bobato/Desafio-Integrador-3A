import Vector from './Vector.png';
import { Link } from "react-router-dom";

function showSidebar()
{
     const sidebar = document.querySelector('.sidebar');
     sidebar.style.display = 'flex';
}

function hideSidebar()
{
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

function showDoacoes()
{
     const doacoes = document.querySelector('.doacoes-side');
     doacoes.style.display = 'flex';
}

function hideDoacoes()
{
     const sidebar = document.querySelector('.doacoes-side');
     sidebar.style.display = 'none';
}

function Header() {
  return (
    <nav>

    <ul className='sidebar'>

        <li onClick={hideSidebar} ><Link to= '#'><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></Link></li>
        <li><Link className='li-link' to = '/'>Home</Link></li>
        <li><Link className='li-link' to = '/Contato'>Contato</Link></li>
        <li><Link className='li-link' to = 'https://www.instagram.com/pp_projeto_aumigo/'>Instagram</Link></li>
        <li><Link className='li-link' to = '/Pix'>Pix</Link></li>
        <li><Link className='li-link' to = '/Cartao'>Cartão</Link></li>
        <li><Link className='li-link' to = '/Boleto'>Boleto</Link></li>
    </ul>

    <ul>

        <li><a href='#'><img src={Vector} /></a></li>
        <li className='hideOnMobile'><Link className='li-link' to = '/'>Home</Link></li>
        <li className='hideOnMobile'><Link className='li-link' to = '/Contato'>Contato</Link></li>
        <li className='hideOnMobile'><Link className='li-link' to = 'https://www.instagram.com/pp_projeto_aumigo/'>Instagram</Link></li>
        <li className='hideOnMobile'><Link className='li-link' to = '/Botoes'>Doações</Link></li>

        <li className='botao-menu' onClick={showSidebar} ><a href='#'><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>

    </ul>

</nav>


  );


}




export default Header;