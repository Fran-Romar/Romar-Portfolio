import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import ConfirmForm from "./ConfirmForm";

import "../css/Contacto.css";

export default function Contacto() {
  const form = useRef();
  const [show, setShow] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setShow(true);
    emailjs
      .sendForm(
        "service_vc42bn4",
        "template_1m456xv",
        form.current,
        "rwfwAQXBd-MMmnWKV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShow(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="Contacto">
      <h3>
        <em className="em-title">Contacto</em>
      </h3>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="user_name">Nombre</label>
          <br />
          <input type="text" name="user_name" id="user_name" required />
        </div>
        <div>
          <label htmlFor="user_email">Correo</label>
          <br />
          <input type="email" name="user_email" id="user_email" required />
        </div>
        <div>
          <label htmlFor="message">Asunto</label>
          <br />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <ConfirmForm show={show} setShow={setShow}></ConfirmForm>
    </section>
  );
}
