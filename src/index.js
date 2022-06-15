import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Fade } from "react-reveal";


ReactDOM.render(
  <Fade>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Fade>,
  document.getElementById("root")
);