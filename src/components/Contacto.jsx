import React from "react";

export default function Contacto() {
  return (
    <section id="Contacto">
      <h3>
        <em className="em-title">Contacto</em>
      </h3>
      <form>
        <div>
          <label htmlFor="name">Nombre</label>
          <br />
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Correo</label>
          <br />
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="asunto">Asunto</label>
          <br />
          <textarea name="asunto" id="asunto" cols="30" rows="7"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
