import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Contato() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Ainda não temos este aqui !
    </Tooltip>
  );
  return (
    <div className= 'contato'>
          
          <Form noValidate validated={validated} onSubmit={handleSubmit} >
          <Form.Group className = "mb-3" controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                        type="email"
                        placeholder="email@email.com"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Insira um email válido por favor !
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Email válido !</Form.Control.Feedback>
                </InputGroup>
            </Form.Group>

            <Form.Group className = "mb-6" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensagem</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control
                        type="text"
                        placeholder="Digite sua mensagem..."
                        aria-describedby="inputGroupPrepend"
                        as="textarea" 
                        rows={3}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Insira uma mensagem !
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Campo preenchido com exito !</Form.Control.Feedback>
                </InputGroup>
            </Form.Group>

            <Form.Group className = 'botao-contato'>
              <div className='botao-contato'>
              <Button type='submit'>
                Enviar
              </Button>
              </div>
              <div className='botao-contato'>
              <Button href='https://www.instagram.com/pp_projeto_aumigo/'>
                Instagram
              </Button>
              </div>
              <div className='botao-contato'>
              <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              
              <Button>WhatsApp</Button>
              
              
              </OverlayTrigger>
              </div>
              <div className='botao-contato'>
              <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              
                <Button>Email</Button>
              
              </OverlayTrigger>
              </div>
            </Form.Group>
            
          </Form>

    </div>
  );
}

export default Contato;