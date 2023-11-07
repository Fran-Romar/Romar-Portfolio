import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../css/Inicio.css";

export default function Inicio() {
  const descargarCV = () => {
    const url = "/CV Francisco Romar.pdf";
    const a = document.createElement("a");
    a.href = url;
    a.download = "CV Francisco Romar.pdf";
    a.click();
  };

  return (
    <section id="Inicio">
      <Container>
        <Row>
          <Col lg="5" className="inicio-img-container">
            <img src="banner-1.png" className="inicio-img" />
          </Col>
          <Col lg="7">
            <div className="inicio-content">
              <h1>Hola, soy Francisco Romar</h1>
              <h2>Desarrollador Web Creativo</h2>
              <p>
                Apasionado por transformar ideas en código. Con experiencia en
                <em className="imp-content">
                  {" "}
                  desarrollo web frontend y backend
                </em>
                , estoy comprometido en crear experiencias digitales novedosas y
                funcionales.
              </p>
            </div>
            <div className="inicio-footer">
              <button className="button-cv" onClick={descargarCV}>
                Descargar CV
              </button>
              <a
                href="https://github.com/Fran-Romar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/francisco-javier-rodr%C3%ADguez-mart%C3%ADn-6946b81b9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
