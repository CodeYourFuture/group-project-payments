import React from "react";
import Button from "../components/Button";
import payments from "../data/payments";
import "./Payments.css";
import { useGlobalContext } from "../context";

const Payments = () => {
  const { completedSum } = useGlobalContext();
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
            <td>{completedSum ? completedSum : "Loading..."}</td>
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
// {total.toFixed(2)}
