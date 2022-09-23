import React from "react";
import { AbountApp } from "../../components/AbountApp";
import { Ilustration } from "../../components/Ilustration";
import "./index.css";

export const Welcome = ({ togglePage }) => (
  <main className="container">
    <AbountApp togglePage={togglePage} />
    <Ilustration />
  </main>
);
