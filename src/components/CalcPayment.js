import React, { useState } from "react";
import Button from "./Button";

const CalcPayment = ({ currencies }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("AUD");
  const [amountOfCurrency, setAmountOfCurrency] = useState(0);
  const [calcPayment, setCalcPayment] = useState(0.0);

  const handleChang = (event) => setAmountOfCurrency(event.target.value);
  const handleSelect = (event) => setSelectedCurrency(event.target.value);
  const calculatePayment = (data) => {
    console.log(selectedCurrency);
    const calcPayment = amountOfCurrency / data.rates[selectedCurrency];
    setCalcPayment(calcPayment.toFixed(2));
  };
  const handleOnClick = () => {
    var today = new Date();
    const month = today.getMonth() < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
    const day = today.getDate() < 10 ? `0${today.getDate() + 1}` : today.getDate() + 1;
    const date = today.getFullYear() + "-" + month + "-" + day;
    fetch(`https://api.frankfurter.app/${date}?from=GBP`)
      .then((res) => res.json())
      .then((data) => {
        calculatePayment(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="CalcPayment container">
      <h2 className="CalcPayment-label p-2 mb-3 mt-4">Calculate Payment in GBP</h2>
      <div className="CalcPayment-control input-group mb-2">
        <select className="form-control " defaultValue={selectedCurrency} onChange={handleSelect}>
          {currencies.map((currency, index) => (
            <option key={index}>{currency}</option>
          ))}
        </select>
        <input
          className="CalcPayment-amount form-control  "
          type="text"
          defaultValue="0.00"
          onChange={handleChang}
        />
        <div className="input-group-prepend">
          <label className="CalcPayment-result input-group-text  mx-1">
            is worth {calcPayment} in GBP.
          </label>
        </div>
      </div>
      <div className="CalcPayment-calculate" />
      <Button onClick={handleOnClick}>Calculate</Button>
    </div>
  );
};

export default CalcPayment;
