import { FiltersHeader } from "../../components/FilterHeader"
import { Form } from "../../components/Form"
import { Header } from "../../components/Header"
import { TotalMoney } from "../../components/TotalMoney"
import { useState } from "react"
import "./index.css"
import { Launchs } from "../../components/LauchList/index."

export const HomePage = ({togglePage}) => {

    const [listTransactions, setListTransactions] = useState([
        { description: "Salário recebido", type: "entrada", value: 2500 },
        { description: "Conta de luz", type: "saída", value: -150 }
    ]);
    
    return (
        <>
        <Header logout={togglePage}/>
        <main className="container-home">
            <section className="field-values" >
            <Form/>
            <TotalMoney/>
            </section>
            <section className="field-launchs">
                <FiltersHeader/>
                <Launchs list={listTransactions} />
            </section>
        </main>
        </>
    )
}