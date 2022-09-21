import { useState } from "react"
import "./index.css"

export const TotalMoney = ({list}) => {
    return(
        <section className="total-money">
            <span className="title-3">Valor total</span>
            <span className="total-value">R$ {list.reduce((act, att) => act + att.value, 0)}</span>
        </section>
    )
}