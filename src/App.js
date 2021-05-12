import React from "react";
import Balance from "./components/Balance";
import CalcPayment from "./components/CalcPayment";
import Payments from "./components/Payments";
import currencies from "./data/currencies";
import "./App.css";

const App = () => {
  const balance = 87.43;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Payments</h1>
      </header>
      <Balance total={balance} />
      <CalcPayment currencies={currencies} />
      <h2>Payments</h2>
      <Payments />
    </div>
  );
};

export default App;
