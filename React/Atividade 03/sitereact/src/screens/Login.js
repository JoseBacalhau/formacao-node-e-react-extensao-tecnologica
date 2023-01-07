import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            src="https://img.freepik.com/vetores-gratis/fundo-azul-moderno-com-impressao-digital-de-neon_23-2148363163.jpg"
            style={{ width:500, height:600, marginLeft:200, marginTop:50}}
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
            <Form.Group className="mb-1" >
            <Link to='/home'> <Button   type="submit" style={{color:"white", fontSize:20, margin:0, padding:10, width:292}}>Logar</Button></Link>
            </Form.Group>
            <Form.Group className="mb-1">
           <Link to='/cadastro'> <Button  variant="danger" type="submit" style={{color:"white", fontSize:20, margin:0, padding:10, width:292}}>Cadastre-se</Button></Link>
            </Form.Group>
          </Form>
          </Col>
      </Row>
    </Container>
  );
}
export default Login;
