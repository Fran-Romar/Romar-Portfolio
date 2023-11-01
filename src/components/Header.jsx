import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [navClass, setNavClass] = useState("closeNav");
  const items = ["Inicio", "Proyectos", "Habilidades", "Sobre mí", "Contacto"];
  return (
    <header>
      <a href="/">
        <img src="logo-white.png" alt="romar" />
      </a>
      <nav className={navClass}>
        {items.map((item) => (
          <Link
            className="nav-links"
            key={item}
            to={`${item}`}
            smooth={true}
            duration={500}
            onClick={() => setNavClass("closeNav")}
          >
            {item}
          </Link>
        ))}
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
