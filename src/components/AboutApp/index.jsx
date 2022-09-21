import React from "react";
import "./index.css"
import  logo  from"../../assets/NuKenzie.svg"

export const SloganApp = ({callback}) => {
    return (
        <section className="slogan">
            <img src={logo} alt="" />
            <h2 className="title-1">Centralize o controle das suas finanças</h2>
            <span  className="text-1">de forma rápida e segura</span>
            <button type="button" className="button-1" onClick={() => callback()}>iniciar</button>
        </section>
    )
}