import "./index.css"
import { useState } from "react"

export const Form = ({runLaunch}) => {
    const [description, setDescription] = useState("");
    const [value,  setValue] = useState(0);
    const [typeValue, setTypeValue] = useState("");

    const launch = { description: description, type: typeValue, value: parseInt(value) };

    return (
        <form onSubmit={(e) => {e.preventDefault(); runLaunch(launch); setDescription(""); setValue(0)}}>
            <label className="label-box" htmlFor="description">
            Descrição
                <input 
                name="description" 
                className="input-1" 
                type="text" 
                placeholder="Digite aqui sua descrição"
                onChange={(e) => setDescription(e.target.value)}/>
                <span className="text-2">Ex: Compra de roupas</span>
            </label>
            <label className="label-box" htmlFor="moneyValue">Valor
            <div className=" input-value">
                <input  
                className="input-1"
                name="moneyValue" 
                type="text" 
                placeholder="1" 
                onChange={(e) => setValue(e.target.value)}
                    />
            </div>
            </label>
            <label className="label-box" htmlFor="typeValue">Tipo de valor
                <select className="select-1" name="typeValue" id=""  onChange={(e) => setTypeValue(e.target.value)}>
                    <option value="">Tipo</option>
                    <option value="entrada">Entrada</option>
                    <option value="saida">Saida</option>
                </select>
            </label>
                <button type="submit" className="button-1">Inserir Valor</button>
        </form>
    )
}