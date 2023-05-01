import React from "react";
import { Home } from "./components/Home.js";
import { NavBar } from "./components/NavBar.js";
// import { Playlist } from "./components/Playlist/Playlist.js";

import "./components/global.scss";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}
