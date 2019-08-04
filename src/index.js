import React from "react";
import { HashRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ScrollToTop from "./ScrollToTop";
import DataContextProvider from "../src/contexts/DataContext"
require('dotenv').config()

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
