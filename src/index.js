import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./App", function() {
    console.log("Accepting the updated printMe module!");
    const NextApp = require("./App").default;
    render(<NextApp />, document.getElementById("root"));
  });
}
