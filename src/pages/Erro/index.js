import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function AlertDismissible() {
  return (
    <div className='perigo-erro'>
      <Alert variant="danger">
        <Alert.Heading>Opa! Parece que algo deu errado...</Alert.Heading>
        <p>
        Enquanto nossos peludos amigos solucionam o problema, que tal conhecer alguns dos nossos AUmigos que ainda estão esperando por um lar?
        </p>
        <hr />
        
        <div className="d-flex justify-content-center">

          <Link to = '/'><Button className = 'pad-botao' variant="outline-success">
            Ir para a página principal !
          </Button></Link>

          <Button className = 'pad-botao' variant="outline-success" href='https://www.instagram.com/pp_projeto_aumigo/'>
            Ir para a página do Instagram !
          </Button>
        </div>
      </Alert>
    </div>
  );
}

export default AlertDismissible;