import React from "react";
import Button from "../components/Button";
import "./Payments.css";
import { useGlobalContext } from "../context";

const PendingPaymentTable = () => {
  const { pendingSum, pendingPayments } = useGlobalContext();
  if (pendingSum > 0) {
    return (
      <div>
        <table className="Payments" style={{ width: "60%" }}>
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
            {pendingPayments.map((payment, index) => {
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
              <td>{pendingSum ? pendingSum : "Loading..."}</td>
              <td>Total (GBP)</td>
              <td />
              <td />
            </tr>
          </tfoot>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <h1>You Do Not Have Any Pending Payment(s)</h1>
      </div>
    );
  }
};

export default PendingPaymentTable;
