import React, { Component, useState, useEffect } from "react";
import Balance from "./components/Balance";
import CalcPayment from "./components/CalcPayment";
import Payments from "./components/Payments";
import currencies from "./data/currencies";
import "./App.css";

const App = () => {
  const balance = 87.43;
  const [fromGBPto, setFromGBPto] = useState("USD");
  const [convertedValue, setConvertedValue] = useState("Loading");

  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?amount=${balance}&from=GBP&to=${fromGBPto}`)
      .then((res) => res.json())
      .then((data) => setConvertedValue(data.rates[fromGBPto]))
      .catch((err) => console.error(err));
  }, [fromGBPto]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Payments</h1>
      </header>
      <Balance
        total={balance}
        currencies={currencies}
        setFromGBPto={setFromGBPto}
        convertedValue={convertedValue}
        fromGBPto={fromGBPto}
      />
      <CalcPayment currencies={currencies} />
      <h2>Payments</h2>
      <Payments />
    </div>
  );
};

export default App;
