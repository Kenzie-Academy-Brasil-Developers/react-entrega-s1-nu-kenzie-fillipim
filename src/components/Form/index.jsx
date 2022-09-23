import { useState } from "react";
import { toast } from "react-toastify";
import "./index.css";

export const Form = ({ runTransations }) => {
  const [description, setDescription] = useState("");
  const [transationValue, setValue] = useState("");
  const [typeValue, setTypeValue] = useState("");

  function checksLaunch() {
    if (!description || !transationValue || !typeValue) {
      toast.error("Preencha Todos os campos!", {
        toastId: "custom-id-yes",
        position: "top-center",
        theme: "colored",
      });
    } else {
      runTransations({
        description: description,
        type: typeValue,
        value: typeValue === "saida" ? `${-transationValue}` : transationValue,
      });
    }
  }

  const handleRunTransation = () => {
    checksLaunch();
    setDescription("");
    setValue("");
    checksLaunch();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRunTransation();
      }}
    >
      <label className="label-box" htmlFor="description">
        Descrição
        <input
          name="description"
          className="input-1"
          type="text"
          value={description}
          placeholder="Digite aqui sua descrição"
          onChange={(e) => setDescription(e.target.value)}
        />
        <span className="text-2">Ex: Compra de roupas</span>
      </label>
      <label className="label-box" htmlFor="moneyValue">
        Valor
        <div className=" input-value">
          <input
            className="input-1"
            name="moneyValue"
            type="text"
            placeholder="1"
            value={transationValue}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </label>
      <label className="label-box" htmlFor="typeValue">
        Tipo de valor
        <select
          className="select-1"
          name="typeValue"
          id=""
          onChange={(e) => setTypeValue(e.target.value)}
        >
          <option value="">Tipo</option>
          <option value="entrada">Entrada</option>
          <option value="saida">Saida</option>
        </select>
      </label>
      <button type="submit" className="button-1">
        Inserir Valor
      </button>
    </form>
  );
};
