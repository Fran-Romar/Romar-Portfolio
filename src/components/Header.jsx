import React, { useState } from "react";

export default function Header() {
  const [navClass, setNavClass] = useState("closeNav");
  return (
    <header>
      <a href="#">
        <img src="logo-white.png" alt="romar" />
      </a>
      <nav className={navClass}>
        <a href="#">Inicio</a>
        <a href="#">Proyectos</a>
        <a href="#">Habilidades</a>
        <a href="#">Sobre mí</a>
        <a href="#">Contacto</a>
        <i
          id="times"
          className="fa fa-times"
          onClick={() => setNavClass("closeNav")}
        ></i>
      </nav>
      <i
        id="bars"
        className="fa fa-bars"
        onClick={() => setNavClass("openNav")}
      ></i>
    </header>
  );
}
