import React from "react";
import "./index.css"
import { SloganApp } from "../../components/AboutApp";
import { Ilustration } from "../../components/Ilustration";

export const Welcome = ({children}) => {
    return (
        <main className="container">
        <SloganApp/>
        <Ilustration/>
        </main>
    )
}