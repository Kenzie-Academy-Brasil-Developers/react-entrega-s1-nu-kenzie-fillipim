import "./index.css";

export const TotalMoney = ({ list }) => {
  const Total = () => list.reduce((act, att) => act + parseFloat(att.value), 0);

  return (
    <section className="total-money">
      <span className="title-3">Saldo total da conta:</span>
      <span className="total-value">R$ {`${Total()}`.replace(".", ",")}</span>
    </section>
  );
};
