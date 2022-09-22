import './CSS/App.css';
import "./CSS/texts.css"
import "./CSS/buttons.css"
import "./CSS/inputs.css"
import "./CSS/animations.css"
import { Welcome } from './pages/Welcome';
import { HomePage } from './pages/HomePage';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState("welcome")

  function togglePages() {
    page === "welcome" ? setPage("home") : setPage("welcome")
  }
  return (
    <div className={page === "welcome" ? "App AppDark" : "App"}>
      {page === "welcome" ? <Welcome togglePage={togglePages} /> : <HomePage togglePage={togglePages} />}    
    </div>
  );
}

export default App;
