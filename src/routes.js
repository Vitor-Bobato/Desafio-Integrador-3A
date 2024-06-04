import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import Contato from './pages/Contato/index';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Boleto from './pages/Pagamento/Boleto/index';
import Cartao from './pages/Pagamento/Cartao/index';
import Pix from './pages/Pagamento/Pix/index';
import Erro from './pages/Erro/index'
import QRcode from './pages/Qrccode/index';
import Botoes from './pages/Pagamento/Botao/index'

function RoutesApp ()
{

    return (

        <BrowserRouter>
        
            <Header/>

            <Routes>

                <Route path = "/" element = {<Home/>} />
                <Route path = "/Botoes" element = {<Botoes/>} />
                <Route path = "/Contato" element = {<Contato/>} />
                <Route path = "/Boleto" element = {<Boleto/>} />
                <Route path = "/Cartao" element = {<Cartao/>} />
                <Route path = "/Pix" element = {<Pix/>} />
                <Route path = "/QRcode" element = {<QRcode/>} />
                <Route path = "*" element = {<Erro/>} />

            </Routes>
            <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
            <script>
                new window.VLibras.Widget('https://vlibras.gov.br/app');
            </script>
            <Footer/>
            


        </BrowserRouter>

    );

}
export default RoutesApp;
