import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Inicio from "./components/Inicio";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import SobreMi from "./components/SobreMi";
import Contacto from "./components/Contacto";

import "./css/App.css";

export default function App() {
  return (
    <>
      <Header />
      <Inicio />
      <Proyectos />
      <Habilidades />
      <SobreMi />
      <Contacto />
      <Footer />
    </>
  );
}
