import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import "../node_modules/react-bootstrap/dist/react-bootstrap.min.js";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./authContext/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
