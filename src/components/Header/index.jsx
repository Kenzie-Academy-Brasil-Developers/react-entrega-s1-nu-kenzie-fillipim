import logo from "../../assets/img/logoDark.svg";
import "./index.css";

export const Header = ({ logout }) => (
  <header className="menu-header">
    <nav>
      <img src={logo} alt="Nu Kenzie Logo" />
      <button className="button-2" type="button" onClick={() => logout()}>
        Inicio
      </button>
    </nav>
  </header>
);
