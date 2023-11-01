import React from "react";

import { Container, Row, Col } from "react-bootstrap";

export default function Proyectos() {
  return (
    <section id="Proyectos">
      <h3>
        <em className="imp-content">Proyetos</em> Desarrollados
      </h3>
      <Container className="mt-5">
        <Row>
          <Col md="4">
            <h4>WeatherApp</h4>
            <a
              href="https://romar-weather-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="proyect-container"
                style={{ backgroundImage: 'url("banner-1.png")' }}
              ></div>
            </a>
          </Col>
          <Col md="4">
            <h4>FilmFlicks</h4>
          </Col>
          <Col md="4">
            <h4>StyleShop</h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
