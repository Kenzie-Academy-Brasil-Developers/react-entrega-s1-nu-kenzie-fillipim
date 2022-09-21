import logo from "../../assets/NuKenzieDark.svg"
import "./index.css"

export const Header = () => {
    return (
        <header className="menu-header">
            <img src={logo} alt="" />
            <button className="button-2" type="button">Inicio</button>
        </header>
    )
}