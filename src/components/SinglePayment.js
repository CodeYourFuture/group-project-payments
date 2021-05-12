import React from "react";
import Button from "./Button";

const SinglePayment = ({ payment }) => {
  const { date, currency, amount, description, status } = payment;
  return (
    <tr>
      <td>{date}</td>
      <td>{currency}</td>
      <td>{amount}</td>
      <td>{description}</td>
      {status === "Pending" ? (
        <>
          <td>{status}</td>
          <td>
            <Button>Cancel</Button>
          </td>
        </>
      ) : (
        <td>{status}</td>
      )}
    </tr>
  );
};

export default SinglePayment;
