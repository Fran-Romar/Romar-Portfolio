import React from "react";

export default function ConfirmForm({ show, setShow }) {
  return (
    <div className={`confirm-form-container ${show ? "show" : ""}`}>
      <img src="check.png" />
      <p>
        Formulario enviado con éxito. <br /> ¡Gracias por tu mensaje!
      </p>
      <i className="fa fa-times" onClick={() => setShow(false)}></i>
    </div>
  );
}
