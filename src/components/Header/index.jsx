import logo from "../../assets/logoDark.svg"
import "./index.css"

export const Header = ({logout}) => {
    return (
        <header className="menu-header">
            <nav>
            <img src={logo} alt="" />
            <button className="button-2" type="button" onClick={() => logout()}>Inicio</button>
            </nav>
        </header>
    )
}