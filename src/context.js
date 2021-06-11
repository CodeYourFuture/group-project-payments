import React, { useContext, useState } from "react";
import paymentData from "./data/payments";
// eslint-disable-line react-hooks/exhaustive-deps
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const pendingPayments = paymentData.filter((payment) => payment.status === "Pending");
  const completedPayments = paymentData.filter((payment) => payment.status === "Complete");
  const [pendingSum, setPendingSum] = useState(0);
  const [completedSum, setCompletedSum] = useState(0);
  let sumOfPendingPayments = 0;
  let sumOfCompletedPayments = 0;

  const calculateSum = (payment, data) => {
    if (payment.status === "Pending") {
      sumOfPendingPayments += payment.amount / data.rates[payment.currency];
    } else {
      sumOfCompletedPayments += payment.amount / data.rates[payment.currency];
    }
  };

  const fetchRatesAndCalculateSum = async () => {
    for (let i = 0; i < paymentData.length; i++) {
      if (paymentData[i].currency !== "GBP") {
        await fetch(`https://api.frankfurter.app/${paymentData[i].date}?from=GBP`)
          .then((res) => res.json())
          .then((data) => calculateSum(paymentData[i], data))
          .catch((error) => console.error(error));
      } else {
        if (paymentData[i].status === "Pending") {
          sumOfPendingPayments += paymentData[i].amount;
        } else {
          sumOfCompletedPayments += paymentData[i].amount;
        }
      }
    }
    setPendingSum(sumOfPendingPayments.toFixed(2));
    setCompletedSum(sumOfCompletedPayments.toFixed(2));
  };

  fetchRatesAndCalculateSum();

  return (
    <AppContext.Provider
      value={{
        pendingPayments,
        completedPayments,
        pendingSum,
        completedSum
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
