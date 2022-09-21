import logo from "../../assets/NuKenzieDark.svg"
import "./index.css"

export const Header = ({logout}) => {
    return (
        <header className="menu-header">
            <img src={logo} alt="" />
            <button className="button-2" type="button" onClick={() => logout()}>Inicio</button>
        </header>
    )
}