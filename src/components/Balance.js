import React, { useState, useEffect } from "react";
import "./Balance.css";

const Balance = ({ total, currencies }) => {
  const [convertTo, setConvertTo] = useState("USD");
  const [convertedValue, setConvertedValue] = useState("Loading");
  const convertFrom = "GBP";

  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?amount=${total}&from=${convertFrom}&to=${convertTo}`)
      .then((res) => res.json())
      .then((data) => setConvertedValue(data.rates[convertTo]))
      .catch((err) => console.error(err));
  }, [convertTo]);

  return (
    <div className="total">
      <h2 className="Balance-title">
        Your account balance is
        <span className="Balance-total">£{total}</span>
      </h2>
      <div className="Balance-alt">
        Your balance is {convertedValue} in
        <select defaultValue={convertTo}>
          {currencies
            .filter((elem) => elem !== "GBP")
            .map((currency, index) => (
              <option
                key={index}
                onClick={() => {
                  setConvertTo(currency);
                }}>
                {currency}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Balance;
