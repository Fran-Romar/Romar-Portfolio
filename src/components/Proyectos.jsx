import React from "react";

import proyects from "../../data/proyects.json";
import Proyect from "../components/Proyect";

import { Container, Row } from "react-bootstrap";

export default function Proyectos() {
  console.log(proyects);
  return (
    <section id="Proyectos">
      <h3>
        <em className="imp-content">Proyetos</em> Desarrollados
      </h3>
      <Container className="mt-5 mb-5">
        <Row>
          {proyects.map((proyect) => (
            <Proyect proyect={proyect}></Proyect>
          ))}
        </Row>
      </Container>
    </section>
  );
}
