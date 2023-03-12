import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// adding bootstrap and font-awesome
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter as Router } from "react-router-dom";
import Store from "./Redux/Store";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
