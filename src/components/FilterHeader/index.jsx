import { useState } from "react"
import "./index.css"

export const FiltersHeader = ({filter}) => {
    const [filterValue, setFilterValue] = useState("todos")
    return (
        <div className="filters-header">
            <h4 className="title-3">Resumos Financeiros</h4>
            <ul>
                <li><button onClick={() => {setFilterValue("todos"); filter("todos")}} className={filterValue === "todos" ? "button-active" : "button-2"} >Todos</button></li>
                <li><button onClick={() => {setFilterValue("entrada"); filter("entrada")}} className={filterValue === "entrada" ? "button-active" : "button-2"}>Entradas</button></li>
                <li><button onClick={() => {setFilterValue("saida"); filter("saida")}} className={filterValue === "saida" ? "button-active" : "button-2"} >Despesas</button></li>
            </ul>
        </div>
    )
}