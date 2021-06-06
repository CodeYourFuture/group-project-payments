import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //More for API: https://exchangeratesapi.io/documentation/
  const baseUrl = "http://api.exchangeratesapi.io/v1/";
  const API_KEY = "7aff50d4b3064534038c7bbf42674b23";
  const uriLatestAll = `${baseUrl}latest?access_key=${API_KEY}`;

  const exchangeRate = async (fromCurrency, toCurrency) => {
    let returnObject;
    await fetch(uriLatestAll)
      .then((res) => res.json())
      .then((data) => {
        if (
          data.success &&
          Object.keys(data.rates).includes(toCurrency) &&
          Object.keys(data.rates).includes(fromCurrency)
        ) {
          returnObject = {
            success: true,
            timestamp: data.timestamp,
            date: data.date,
            exchangeRate: data.rates[toCurrency] / data.rates[fromCurrency]
          };
        } else {
          returnObject = { success: false };
        }
      })
      .catch((err) => console.log(err));
    return returnObject;
  };
  //console.log(exchangeRate("EUR", "USD")); // Sample usage

  return <AppContext.Provider value={{ exchangeRate }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
