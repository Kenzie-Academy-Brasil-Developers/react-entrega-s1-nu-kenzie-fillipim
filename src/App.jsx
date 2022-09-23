import { Welcome } from "./pages/Welcome";
import { HomePage } from "./pages/Home";
import { useState } from "react";
import "./CSS/App.css";
import "./CSS/texts.css";
import "./CSS/buttons.css";
import "./CSS/inputs.css";
import "./CSS/animations.css";

function App() {
  const [page, setPage] = useState("welcome");
  const [listTransactions, setListTransactions] = useState([]);

  function togglePages() {
    page === "welcome" ? setPage("home") : setPage("welcome");
  }
  return (
    <div className={page === "welcome" ? "App AppDark" : "App"}>
      {page === "welcome" ? (
        <Welcome togglePage={togglePages} />
      ) : (
        <HomePage togglePage={togglePages} listTransactions={listTransactions} setListTransactions={setListTransactions} />       
      )}
    </div>
  );
}

export default App;
