import cachorroum from './cachorro1.png';
import cachorrodois from './cachorro2.png';
import cachorrotres from './cachorro3.png';
import cachorroquatro from './cachorro4.png';
import cachorrocinco from './cachorro5.png';
import cachorroseis from './cachorro6.png';
import cachorrosete from './cachorro7.png';
import cachorrooito from './cachorro8.png';
import Carousel from 'react-bootstrap/Carousel';

function Home() {

  return (
    <div className = 'div-main'>

        <div className='lado-esq'>
            <div  className='card-esq'>
                <Carousel className='caroselhome' >
                    <Carousel.Item>
                        <img src = {cachorroum} alt='Cachorro mt fofo 1' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src = {cachorrodois} alt='Cachorro mt fofo 2'  />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src = {cachorrotres} alt='Cachorro mt fofo 3'  />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src = {cachorroquatro} alt='Cachorro mt fofo 4'  />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src = {cachorrocinco} alt='Cachorro mt fofo 5'  />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src = {cachorroseis} alt='Cachorro mt fofo 6'  />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src = {cachorrosete} alt='Cachorro mt fofo 7'  />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src = {cachorrooito} alt='Cachorro mt fofo 8'  />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

        <div className='lado-dir'>

            <div className='card-dir'>

                <h1>Transforme Vidas, Adote um Amigo Peludo!</h1>

                <p>Abra as portas do seu coração e lar para um companheiro fiel e cheio de amor: o AUmigo! Mais do que um portal, somos um movimento que une pessoas apaixonadas por animais e empenhadas em construir um futuro melhor para os pets abandonados.Nossa missão é promover a adoção responsável, conectando futuros tutores com os peludos que sonham com um lar aconchegante e cheio de carinho. Acreditamos que cada animal merece uma chance de viver feliz e amado, e trabalhamos incansavelmente para que isso se torne realidade.
                Ao adotar um pet no AUmigo, você não apenas ganha um companheiro leal e amoroso, mas também contribui para a construção de uma sociedade mais justa e compassiva com os animais.</p>

            </div>

        </div>

    </div>



  );
}

export default Home;