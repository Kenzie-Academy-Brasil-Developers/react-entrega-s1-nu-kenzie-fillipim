import "./index.css";
import NoLaunchs from "../../assets/NoCard.svg";
import { LaunchCard } from "../LaunchCard";

export const Launchs = ({ list }) => {
  return (
    <>
      {list.length > 0 ? (
        <ul className="list-container">
          {list.map(({description, type, value}) => (
            <LaunchCard description={description} type={type} value={value} />
          ))}
        </ul>
      ) : (
        <div className="no-cards">
            <span className="title-2">Você ainda não possui nenhum lançamento</span>
            <img src={NoLaunchs} alt="" />
        </div>
      )}
    </>
  );
};
