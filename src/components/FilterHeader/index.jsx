import "./index.css"

export const FiltersHeader = () => {
    return (
        <div className="filters-header">
            <h4 className="title-3">Resumos Financeiros</h4>
            <ul>
                <li><button className="button-2" >Todos</button></li>
                <li><button className="button-2" >Entradas</button></li>
                <li><button className="button-2" >Despesas</button></li>
            </ul>
        </div>
    )
}