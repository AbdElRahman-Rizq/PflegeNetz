import React from "react";

import ReactDOM from "react-dom/client";

import Routes from "./routes";

import UserContextProvider from "./context/UserContext";

import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./config/locale/i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <I18nextProvider i18n={i18n}>

    <Routes />
    </I18nextProvider>
  </UserContextProvider>
);
