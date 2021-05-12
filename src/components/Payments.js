import React from "react";
import "./Payments.css";
import SinglePayment from "./SinglePayment";
import payments from "../data/payments";

function Payments() {
  return (
    <table className="Payments">
      <thead>
        <tr>
          <th>Date</th>
          <th>Cur</th>
          <th>Amount</th>
          <th className="Payments-description">Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((payment, index) => {
          // for each payment object of payments array => return <SinglePayment /> and pass payment object as a prop
          return <SinglePayment payment={payment} key={index} />;
        })}
      </tbody>
      <tfoot>
        <tr>
          <td />
          <td />
          <td>???</td>
          <td>Total (GBP)</td>
          <td />
          <td />
        </tr>
      </tfoot>
    </table>
  );
}

export default Payments;
