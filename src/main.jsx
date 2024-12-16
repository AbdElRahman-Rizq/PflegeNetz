import React from "react";

import ReactDOM from "react-dom/client";

import Routes from "./routes";

import UserContextProvider from "./context/UserContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <Routes />
  </UserContextProvider>
);
