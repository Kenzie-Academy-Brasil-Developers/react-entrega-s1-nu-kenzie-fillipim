import "./index.css";
import NoLaunchs from "../../assets/img/NoCard.svg";
import { LaunchCard } from "../LaunchCard";

export const Launchs = ({ list, deleteTransaction }) => {
  return (
    <>
      {list.length > 0 ? (
        <ul className="list-container">
          {list.map(({ description, type, value }, id) => (
            <LaunchCard
              key={id}
              description={description}
              type={type}
              value={value}
              deleteTransaction={deleteTransaction}
            />
          ))}
        </ul>
      ) : (
        <div className="no-cards">
          <span className="title-2">
            Você ainda não possui nenhum lançamento
          </span>
          <img src={NoLaunchs} alt="Ilustracão de Lista" />
        </div>
      )}
    </>
  );
};
