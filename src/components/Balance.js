import React from "react";
import "./Balance.css";

const Balance = ({ total, currencies, setFromGBPto, convertedValue, fromGBPto }) => {
  return (
    <div className="Balance">
      <h2 className="Balance-title">
        Your account balance is
        <span className="Balance-total">£{total}</span>
      </h2>
      <div className="Balance-alt">
        Your balance is {convertedValue} in
        <select defaultValue={fromGBPto}>
          {currencies.map((currency, index) => (
            <option
              key={index}
              onClick={() => {
                if (currency !== "GBP") {
                  setFromGBPto(currency);
                }
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
