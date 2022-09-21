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

    function addLaunch(newTransation) {
        setListTransactions([...listTransactions, newTransation])
    }

    function handleTransation(transation) {
        const newList = listTransactions.filter(({description}) => description !== transation)
        setListTransactions(newList)
    }
    
    return (
        <>
        <Header logout={togglePage}/>
        <main className="container-home">
            <section className="field-values" >
            <Form runLaunch={addLaunch}/>
            <TotalMoney list={listTransactions}/>
            </section>
            <section className="field-launchs">
                <FiltersHeader/>
                <Launchs list={listTransactions} deleteLauch={handleTransation} />
            </section>
        </main>
        </>
    )
}