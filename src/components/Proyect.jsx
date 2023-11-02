import React from "react";

import { Col } from "react-bootstrap";

export default function Proyect({ proyect }) {
  console.log(proyect.url);
  return (
    <Col md="4">
      <a
        href={proyect.url}
        target="_blank"
        rel="noopener noreferrer"
        className="proyect-a"
      >
        <div
          className="proyect-container"
          style={{ backgroundImage: `url("${proyect.name}.png")` }}
        >
          <div className="proyect-content">
            <h5>{proyect.name}</h5>
            <p>{proyect.description}</p>
            <div className="proyect-content-tecs">
              {proyect.tecs.map((tec) => (
                <img src={`${tec}.png`} alt={tec} className="tec-img" />
              ))}
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
}
