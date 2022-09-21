import React from "react";
import "./index.css"
import  logo  from"../../assets/NuKenzie.svg"

export const SloganApp = ({callback, text}) => {
    return (
        <section className="slogan">
            <img src={logo} alt="" />
            <h2 className="title-1">Centralize o controle das suas finanças</h2>
            <span  className="text-1">de forma rápida e segura</span>
            <button className="button-1">iniciar</button>
        </section>
    )
}