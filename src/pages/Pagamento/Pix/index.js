import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Overlay from 'react-bootstrap/Overlay';

import { Link } from "react-router-dom";

function Pix() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
      event.preventDefault();
      event.stopPropagation();
    setValidated(true);
    setShow (!show);
    
  };




  return (

    <div className= 'boleto'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

        {/* Primeira fileira de campos para preenchimento */}
        <Row className="mb-3">

            {/* Campo nome */}
            <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Primeiro Nome </Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Primeiro nome..."
                />
                <Form.Control.Feedback type ='invalid'>Insira o seu nome !</Form.Control.Feedback>
                <Form.Control.Feedback>Preenchido!</Form.Control.Feedback>
            </Form.Group>

            {/* Campo sobrenome */}
            <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Sobrenome..."
                />
                <Form.Control.Feedback type ='invalid'>Insira o seu sobrenome !</Form.Control.Feedback>
                <Form.Control.Feedback>Preenchido!</Form.Control.Feedback>
            </Form.Group>

            {/* Campo CPF */}
            <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>CPF</Form.Label>
                <Form.Control type="text" placeholder="000.000.000-00" required />
                <Form.Control.Feedback type="invalid">
                    CPF inválido.
                </Form.Control.Feedback>
                <Form.Control.Feedback>CPF válido !</Form.Control.Feedback>
            </Form.Group>

        </Row>

        {/* Segunda fileira de campos para preenchimento */}

        <Row className="mb-3">

            {/* Campo email */}
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
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
            
            {/* Campo estado */}
            <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Estado</Form.Label>
                <Form.Control type="text" placeholder="Estado" required />
                <Form.Control.Feedback type="invalid">
                    Por favor insira o nome do seu um estado !
                </Form.Control.Feedback>
                <Form.Control.Feedback>Estado válido !</Form.Control.Feedback>
            </Form.Group>

            {/* Campo Cidade */}
            <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Cidade</Form.Label>
                <Form.Control type="text" placeholder="Cidade" required />
                <Form.Control.Feedback type="invalid">
                    Por favor insira o nome da sua cidade !
                </Form.Control.Feedback>
                <Form.Control.Feedback>Cidade válida !</Form.Control.Feedback>
            </Form.Group>
        </Row>


        <Row className="mb-3">
          
            {/* Campo bairro */}
            <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Bairro</Form.Label>
                <Form.Control type="text" placeholder="Bairro" required />
                <Form.Control.Feedback type="invalid">
                    Por favor insira o nome do seu Bairro !
                </Form.Control.Feedback>
                <Form.Control.Feedback>Bairro válido !</Form.Control.Feedback>
            </Form.Group>

            {/* Campo rua */}
            <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Rua</Form.Label>
                <Form.Control type="text" placeholder="Nome da sua rua" required />
                <Form.Control.Feedback type="invalid">
                    Por favor insira o nome de sua cidade !
                </Form.Control.Feedback>
                <Form.Control.Feedback>Nome de rua válido !</Form.Control.Feedback>
            </Form.Group>

            {/* Campo CEP */}
            <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>CEP</Form.Label>
                <Form.Control type="text" placeholder="00000-000" required />
                <Form.Control.Feedback type="invalid">
                    CEP inválido.
                </Form.Control.Feedback>
                <Form.Control.Feedback>CEP válido !</Form.Control.Feedback>
            </Form.Group>
        </Row>

        {/* coisa pra aceitar os termos */}

        <Form.Group className="mb-3">
            <Form.Check
            required
            label="Concordo com os termos e condições."
            feedback="Você deve concordar com os termos e condições para enviar !"
            feedbackType="invalid"
            />
        </Form.Group>
        
        {/* Botão para enviar */}
        
        <Button type ='submit' ref={target} >
        Verificar
        </Button>

        <Overlay target={target.current} show={show} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              display: 'flex',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            <Link to = '/QRcode'><Button>Gerar QRcode</Button></Link>
            
          </div>      
        )}
      </Overlay>

        </Form>

    </div>
  );
}

export default Pix; 