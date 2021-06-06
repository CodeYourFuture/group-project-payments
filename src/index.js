import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { AppProvider } from './context'

ReactDOM.render(
    <React.StrictMode>
      <AppProvider>
      <App />
      </AppProvider>
    </React.StrictMode>,
    document.getElementById("root"),
  );
  
registerServiceWorker();
