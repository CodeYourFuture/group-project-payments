import React from "react";
import Button from "../components/Button";
import payments from "../data/payments";
import "./Payments.css";
import lodash from "lodash";
import { useGlobalContext } from "../context";

const Payments = () => {
  const { rates } = useGlobalContext();
  console.log(rates);
  let total = lodash.sumBy(payments, function(user) {
    if (user.currency !== "GBP") {
      // user.amount /
    }
    return user.amount;
  });

  return (
    <div>
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
            const { date, status, currency, amount, description } = payment;
            return (
              <tr key={index}>
                <td>{date}</td>
                <td>{currency}</td>
                <td>{amount}</td>
                <td>{description}</td>
                <td>{status}</td>
                <td>{status === "Pending" ? <Button>Cancel</Button> : null}</td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <td />
            <td />
            <td>{total.toFixed(2)}</td>
            <td>Total (GBP)</td>
            <td />
            <td />
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Payments;
