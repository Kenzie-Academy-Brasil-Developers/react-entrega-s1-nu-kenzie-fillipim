import "./index.css";
import { FaTrash } from 'react-icons/fa';

export const LaunchCard = ({description, type, value, deleteLaunch}) => {
    return(
        <li className={type === "entrada" ? "launch-card launch-card-input" : "launch-card launch-card-output" }>
            <ul>
                <li className="title-3">{description}</li>
                <li className="text-1">R$ {value}</li>
                <li><button type="button" onClick={() => deleteLaunch(description)} ><FaTrash className="trash-button"/></button></li>
            </ul>
            <span className="text-1">{type}</span>
        </li>
    )
}