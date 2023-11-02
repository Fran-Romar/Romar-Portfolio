import React from "react";

export default function Habilidades() {
  const habilities = [
    "html",
    "css",
    "js",
    "react",
    "bootstrap",
    "git",
    "java",
    "python",
    "mariadb",
    "mysql",
  ];
  return (
    <section id="Habilidades">
      <h3>
        <em className="em-title">Habili</em>dades
      </h3>
      <div className="habilities-container">
        {habilities.map((hab) => (
          <img key={hab} src={`${hab}.png`} alt={hab} className="hab-img" />
        ))}
      </div>
    </section>
  );
}
