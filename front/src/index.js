import React from "react";
import ReactDOM from "react-dom/client";

import RouterHandler from "./pages/RouterHandler";
import { BrowserRouter } from "react-router-dom";
import "./app.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterHandler />
    </BrowserRouter>
  </React.StrictMode>
);
