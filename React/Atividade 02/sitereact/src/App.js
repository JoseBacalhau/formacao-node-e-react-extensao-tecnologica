import React from "react";
// import logo from "./logo"
import "./App.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

function App() {
  return (
    // <Container>

    // </Container>
    // style={{ width:300, marginTop:200, marginRight:400}}
    <Container>
      <Row style={{backgroundColor: 'white'}}>
        <Col>
          <Image
            src="https://img.freepik.com/vetores-gratis/fundo-azul-moderno-com-impressao-digital-de-neon_23-2148363163.jpg"
            style={{ width:500, height:600, marginLeft:200 }}
          ></Image>
          </Col>
        <Col>
          <Form className="square border border-dark border-4" style={{ width:300, marginTop:200}}>
          <p className="fs-3 text-center">Login</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Form>
          </Col>
      </Row>
    </Container>
  );
}
export default App;
