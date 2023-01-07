import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
// import { Link } from "react-router-dom";
// import { Text, StyleSheet } from "react-native";


function Cadastro() {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/834/834179.png"
            style={{ width:400, height:400, marginLeft:400, marginTop:30}}
          ></Image>
          <p style={{fontSize:70, marginLeft:445}}>Tela inicial</p>
          </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  );
}
export default Cadastro;
