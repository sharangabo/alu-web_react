import React from "react";
import logo from "./assets/logo.jpeg"; // Assuming you named the Holberton logo file as holberton-logo.png
import "./App.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form action="">
          <label htmlFor="email">
            email:
            <input type="email" id="email" />
          </label>
          <label htmlFor="password">
            password:
            <input type="password" id="password" />
          </label>
          <button>ok</button>
        </form>
      </body>
      <footer>
        <div className="App-footer" data-testid="App-footer">
          <p>Copyright {getFullYear()} - holberton School</p>
          <p>{getFooterCopy(false)}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
