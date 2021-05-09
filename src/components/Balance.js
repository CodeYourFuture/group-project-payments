import React, { useState } from "react";
import "./Balance.css";

const Balance = (props) => {
  const [alternateCurrency] = useState("USD");
  const { total, currencies } = props;
  return (
    <div className="Balance">
      <h2 className="Balance-title">
        Your account balance is
        <span className="Balance-total">£{total}</span>
      </h2>
      <div className="Balance-alt">
        Your balance is ??? in
        <select defaultValue={alternateCurrency}>
          {currencies.map((currency, index) => (
            <option key={index}>{currency}</option>
          ))}
        </select>
        .
      </div>
    </div>
  );
};

export default Balance;
