import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md="4">
            <a href="/">
              <img src="logo-white.png" alt="romar" />
            </a>
          </Col>
          <Col md="4">
            <div className="footer-content">
              <p>
                <em>Transformando ideas en experiencias.</em>
                <br />
                Developed by <em className="em-title">Fran Romar</em>
              </p>
            </div>
          </Col>
          <Col md="4">
            <div className="footer-rrss">
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
    </footer>
  );
}
