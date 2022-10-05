import "./index.css";
import { FaTrash } from "react-icons/fa";

export const TransactionCard = ({ description, type, value, deleteTransaction }) => {
  const transationValue = parseFloat(value).toFixed(2);

  return (
    <li
      className={`launch-card ${
        type === "entrada" ? "launch-card-input" : "launch-card-output"
      }`}
    >
      <ul>
        <li className="title-3">{description}</li>
        <li className="text-1">R$ {`${transationValue}`.replace(".", ",")}</li>
        <li>
          <button
            type="button"
            className="trash-button"
            onClick={() => deleteTransaction(description)}
          >
            <FaTrash />
          </button>
        </li>
      </ul>
      <span className="text-1">{type}</span>
    </li>
  );
};
