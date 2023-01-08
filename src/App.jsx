import React from "react";
import { Home } from "./components/Home.js";
import { NavBar } from "./components/NavBar.js";

import "./components/global.scss";
// import {
//   AUTH_ENDPOINT,
//   CLIENT_ID,
//   REDIRECT_URI,
//   RESPONSE_TYPE,
// } from "./Credential.js";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}
