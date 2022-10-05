import React from "react";
import logo from "../../assets/img/logo.svg";
import "./index.css";

export const AbountApp = ({ togglePage }) => (
  <section className="slogan">
    <img src={logo} alt="" />
    <h2 className="title-1">Centralize o controle das suas finanças</h2>
    <p className="text-1">de forma rápida e segura</p>
    <button type="button" className="button-1" onClick={() => togglePage()}>
      iniciar
    </button>
  </section>
);
