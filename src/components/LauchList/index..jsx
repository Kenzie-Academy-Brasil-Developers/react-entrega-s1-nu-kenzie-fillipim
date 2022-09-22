import "./index.css";
import NoLaunchs from "../../assets/NoCard.svg";
import { LaunchCard } from "../LaunchCard";

export const Launchs = ({ list, deleteLauch, filterValue }) => {
    const filter = list.filter((launch) => launch.type === filterValue)
    console.log(filter, filterValue)
  return (
    <>
      {list.length > 0 ? (
        <ul className="list-container">
          {filterValue === "todos" ? list.map(({description, type, value}, idx) => (
            <LaunchCard key={idx} description={description} type={type} value={value} deleteLaunch={deleteLauch} />
          )) : filter.map(({description, type, value}, idx) => (
            <LaunchCard key={idx} description={description} type={type} value={value} deleteLaunch={deleteLauch} />
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
