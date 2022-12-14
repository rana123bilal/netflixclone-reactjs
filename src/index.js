import React from "react";
import ReactDOM from "react-dom/client";
import { DataProvider } from "./context/data-context";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DataProvider>
        <App />
      </DataProvider>
    </Provider>
  </React.StrictMode>
);
