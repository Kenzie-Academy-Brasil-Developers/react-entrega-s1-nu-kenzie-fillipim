import { useState } from "react"
import "./index.css"

export const TotalMoney = ({list}) => {
    return(
        <section className="total-money">
            <span className="title-3">Saldo total da conta:</span>
            <span className="total-value">R$ {`${parseFloat(list.reduce((act, att) => act + att.value, 0)).toFixed(2)}`.replace(".",",")}</span>
        </section>
    )
}