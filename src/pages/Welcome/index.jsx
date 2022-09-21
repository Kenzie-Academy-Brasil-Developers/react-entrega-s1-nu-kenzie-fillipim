import React from "react";
import "./index.css"
import { SloganApp } from "../../components/AboutApp";
import { Ilustration } from "../../components/Ilustration";

export const Welcome = ({togglePage}) => {
    return (
        <main className="container">
        <SloganApp callback={togglePage}/>
        <Ilustration/>
        </main>
    )
}