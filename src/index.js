import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.render(
//   React.createElement("div", {style: {color: "red"}}, null, "Hello!"), //creating element
//   document.getElementById('root') //rendering to root
// );

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// ReactDOM.render(
//   React.createElement("div", {style: {color: "blue"}}, React.createElement("h1", null, "hi!")),
//   document.getElementById('root')
// );
