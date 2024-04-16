import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DataContextProvider from "./Context/DataContext.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </DataContextProvider>
);
