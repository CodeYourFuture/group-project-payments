import React, { useState, useEffect } from "react";
import Select from "react-dropdown-select";
import "./Balance.css";

const Balance = ({ total }) => {
  const [convertTo, setConvertTo] = useState("USD");
  const [convertedValue, setConvertedValue] = useState("");
  const convertFrom = "GBP";
  const [rates, setRates] = useState("");

  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${convertFrom}`)
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (currency) => {
    setConvertTo(currency);
    setConvertedValue((total * rates[convertTo]).toFixed(2));
  };

  return (
    <div className="total">
      <h2 className="Balance-title">
        Your account balance is
        <span className="Balance-total">£{total}</span>
      </h2>
      <div className="Balance-alt">
        {convertedValue !== "" && `Your balance is ${convertedValue}`}
        <select>
          <option>Select a currency</option>
          {Object.keys(rates).map((currency, index) => (
            <option key={index} onClick={() => handleChange(currency)}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Balance;
