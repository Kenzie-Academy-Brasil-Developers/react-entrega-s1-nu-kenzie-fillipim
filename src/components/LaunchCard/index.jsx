import "./index.css";
import { FaTrash } from 'react-icons/fa';

export const LaunchCard = ({description, type, value, deleteLaunch}) => {
    return(
        <li className={type === "entrada" ? "launch-card launch-card-input" : "launch-card launch-card-output" }>
            <ul>
                <li className="title-3">{description}</li>
                <li className="text-1">R$ {`${parseFloat(value).toFixed(2)}`.replace("-", "").replace(".",",")}</li>
                <li><button type="button"  className="trash-button" onClick={() => deleteLaunch(description)} ><FaTrash/></button></li>
            </ul>
            <span className="text-1">{type}</span>
        </li>
    )
}