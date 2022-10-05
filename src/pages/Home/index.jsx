import { FiltersHeader } from "../../components/FilterHeader";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { TotalMoney } from "../../components/TotalMoney";
import { useState } from "react";
import { Transactions } from "../../components/TransactionsList/index.";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.min.css";

export const HomePage = ({
  togglePage,
  listTransactions,
  setListTransactions,
}) => {
  const [filterTransations, setFilterTransactions] = useState(listTransactions);

  const addTransation = (newTransation) => {
    setFilterTransactions([...listTransactions, newTransation]);
    setListTransactions([...listTransactions, newTransation]);
  };

  const handleTransation = (transation) => {
    const newList = listTransactions.filter(
      ({ description }) => description !== transation
    );
    setFilterTransactions(newList);
    setListTransactions(newList);
  };

  const filterTransactions = (value) => {
    value !== "todos"
      ? setFilterTransactions(
          listTransactions.filter((transation) => transation.type === value)
        )
      : setFilterTransactions(listTransactions);
  };

  return (
    <>
      <Header logout={togglePage} />
      <main className="container-home">
        <section className="field-values">
          <Form runTransations={addTransation} />
          <TotalMoney list={listTransactions} />
        </section>
        <section className="field-launchs">
          <FiltersHeader filter={filterTransactions} />
          <Transactions
            list={filterTransations}
            deleteTransaction={handleTransation}
          />
        </section>
        <ToastContainer />
      </main>
    </>
  );
};
