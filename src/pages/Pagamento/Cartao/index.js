import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Cartao() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (

    <div className= 'cartao'>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>

        {/* Primeira Fileira */}
      <Row className="mb-3">

        {/* Campo NOME */}
        <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Primeiro Nome</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Primeiro Nome..."
            />
            <Form.Control.Feedback type = 'invalid'>Preencha o campor com seu nome !</Form.Control.Feedback>
            <Form.Control.Feedback>Campo nome preenchido com exito !</Form.Control.Feedback>
        </Form.Group>

        {/* Campo SOBRENOME */}
        <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Sobrenome..."
            />
            <Form.Control.Feedback type = 'invalid'>Preencha o campo com seu sobrenome !</Form.Control.Feedback>
            <Form.Control.Feedback>Campo sobrenome preenchido com exito !</Form.Control.Feedback>
        </Form.Group>


        {/* Campo CPF */}
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="text" placeholder="000.000.000-00" required />
          <Form.Control.Feedback type="invalid">
            Preencha o campo com seu CPF !
          </Form.Control.Feedback>
          <Form.Control.Feedback>Campo CPF preenchido com exito !</Form.Control.Feedback>
        </Form.Group>

      </Row>


        {/* Segunda fileira */}
      <Row className="mb-3">


        {/* Campo EMAIL */}
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="email@email.com"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Preencha o campo com seu email !
            </Form.Control.Feedback>
            <Form.Control.Feedback>Campo email preenchido com exito !</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>


        {/* Campo CARTÃO */}
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Cartão</Form.Label>
          <Form.Control type="text" placeholder="Visa, MasterCard" required />
          <Form.Control.Feedback type="invalid">
            Preencha o campo com a bandeira do seu cartão (Visa ou Mastercard) !
          </Form.Control.Feedback>
          <Form.Control.Feedback>Campo cartão preenchido com exito !</Form.Control.Feedback>
        </Form.Group>



        {/* Campo NÚMERO DO CARTÃO */}
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Número do Cartão</Form.Label>
          <Form.Control type="text" placeholder="0000 0000 0000 0000" required />
          <Form.Control.Feedback type="invalid">
            Preencha o campo com o número do cartão !            
          </Form.Control.Feedback>
          <Form.Control.Feedback>Campo número do cartão preeenchido com exito !</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        {/* Data de válidade do cartão */}
      <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Data de válidade do cartão</Form.Label>
          <Form.Control type="month" placeholder="MM/AA" required />
          <Form.Control.Feedback type="invalid">
            Preencha o campo com a data de válidade do seu cartão (MÊS/ANO) !
          </Form.Control.Feedback>
          <Form.Control.Feedback>Campo data de válidade do cartão preenchido com exito !</Form.Control.Feedback>
        </Form.Group>


        {/* Campo Nome do titular */}
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nome do Titular</Form.Label>
          <Form.Control type="text" placeholder="Nome do Titular..." required />
          <Form.Control.Feedback type="invalid">
            Preencha o campo com o nome do titular do cartão !
          </Form.Control.Feedback>
          <Form.Control.Feedback>Campo nome do titular preenchido com exito !</Form.Control.Feedback>
        </Form.Group>    

        {/* Campo código de segurança */}

        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>Cód. Segurança</Form.Label>
          <Form.Control type="number" placeholder="CVC" required />
          <Form.Control.Feedback type="invalid">
            Preencha o campo com o código de segurança do ser cartão (CVC) !
          </Form.Control.Feedback>
          <Form.Control.Feedback>Campo Cód Segurança preenchido com exito !</Form.Control.Feedback>
        </Form.Group>    
        </Row>

        {/* Terceira fileira */}

        <Row className="mb-3">


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

            {/* Campo bairro */}
            <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Bairro</Form.Label>
                <Form.Control type="text" placeholder="Bairro" required />
                <Form.Control.Feedback type="invalid">
                    Por favor insira o nome do seu Bairro !
                </Form.Control.Feedback>
                <Form.Control.Feedback>Bairro válido !</Form.Control.Feedback>
            </Form.Group>

        </Row>

        <Row className="mb-2">

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

        <Button type="submit">Enviar</Button>


        </Form>

    </div>
  );
}

export default Cartao;