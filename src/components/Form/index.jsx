import "./index.css"
import { useState } from "react"

export const Form = ({runLaunch}) => {
    const [description, setDescription] = useState("")
    const [value,  setValue] = useState(0)
    const [typeValue, setTypeValue] = useState("")

    return (
        <form >
            <label className="label-box" htmlFor="description">
            Descrição
                <input name="description" className="input-1" type="text" placeholder="Digite aqui sua descrição"/>
                <span className="text-2">Ex: Compra de roupas</span>
            </label>
            <label className="label-box" htmlFor="moneyValue">Valor
                <div className="input-1 value">
                <input  name="moneyValue" type="text" placeholder="1" />
                <span>R$</span>
                </div>
            </label>
            <label className="label-box" htmlFor="typeValue">Tipo de valor
                <select className="select-1" name="typeValue" id="">
                    <option value="input">Entrada</option>
                    <option value="output">Saida</option>
                </select>
            </label>
                <button type="submit" className="button-1">Inserir Valor</button>
        </form>
    )
}