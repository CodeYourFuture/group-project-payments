import React, { useContext, useState, useEffect, useCallback } from "react";
// eslint-disable-line react-hooks/exhaustive-deps
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [rates, setRates] = useState();

  //More for API: https://exchangeratesapi.io/documentation/
  const baseUrl = "http://api.exchangeratesapi.io/v1/";
  const API_KEY = "26c3ba443b25881ea8b5b61c42c126b1";
  const uriLatestAll = `${baseUrl}latest?access_key=${API_KEY}`;
  const FetchRate = useCallback(async () => {
    try {
      const response = await fetch(uriLatestAll);
      const data = await response.json();
      setRates(data.rates);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    FetchRate();
  }, []);

  return <AppContext.Provider value={{ rates }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
