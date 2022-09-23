import Ilustrator from "../../assets/img/illustration.svg";
import Card1 from "../../assets/img/Card1.svg";
import Card2 from "../../assets/img/Card2.svg";
import "./index.css";

export const Ilustration = () => (
  <section className="illustration">
    <img id="image1" src={Ilustrator} alt="Ilustração de Cartão" />
    <img id="image2" src={Card1} alt="Ilustração de Cartão" />
    <img id="image3" src={Card2} alt="Ilustração de Cartão" />
  </section>
);
