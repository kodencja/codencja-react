import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-slider/dist/css/bootstrap-slider.css"
import "react-multi-carousel/lib/styles.css";
// import $ from "jquery";
import Popper from "popper.js";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import './fontello/css/fontello.css';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import AppCl from "./AppCl";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
