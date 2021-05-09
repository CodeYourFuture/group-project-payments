import React, { useState } from "react";
import Button from "./Button";
import "./CalcPayment.css";

const Payment = (props) => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [amount, setAmount] = useState("USD");

  const selectCurrency = (event) => {
    const currency = event.target.value;
    setSelectedCurrency(currency);
  };

  const { currencies } = props;
  return (
    <div className="CalcPayment">
      <h2 className="CalcPayment-label">Calculate Payment in GBP</h2>
      <div className="CalcPayment-control">
        <select onChange={selectCurrency} defaultValue={selectedCurrency}>
          {currencies.map((currency, index) => (
            <option key={index}>{currency}</option>
          ))}
        </select>
        <input className="CalcPayment-amount" type="text" defaultValue="0.00" />
        is worth <span className="CalcPayment-result">???</span> in GBP.
        <div className="CalcPayment-calculate">
          <Button>Calculate</Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
