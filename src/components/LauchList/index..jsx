import "./index.css";
import NoLaunchs from "../../assets/NoCard.svg";
import { LaunchCard } from "../LaunchCard";

export const Launchs = ({ list, deleteLauch, filterValue }) => {
    const filter = list.filter((launch) => launch.type === filterValue)
    
    function checksLists() {
      if(filterValue === "todos" && list.length > 0) {
        return true
      }else if(filter.length === 0 && list.length > 0) {
        return false
      }else if( filter.length === 0 ) {
        return false
      }
      return true
    }
  return (
    <>
      {checksLists() ? (
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
      )
      }
    </>
  );
};
