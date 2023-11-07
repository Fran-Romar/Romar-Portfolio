import React from "react";

import proyects from "../../data/proyects.json";
import Proyect from "../components/Proyect";

import { Container, Row } from "react-bootstrap";
import "../css/Proyectos.css";

export default function Proyectos() {
  console.log(proyects);
  return (
    <section id="Proyectos">
      <h3>
        <em className="em-title">Proyetos</em> Desarrollados
      </h3>
      <Container className="mt-5 mb-5">
        <Row>
          {proyects.map((proyect) => (
            <Proyect key={proyect.id} proyect={proyect}></Proyect>
          ))}
        </Row>
      </Container>
    </section>
  );
}
