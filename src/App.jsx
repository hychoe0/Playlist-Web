import React from "react";
import { Home } from "./components/Home.js";
import { NavBar } from "./components/NavBar.js";
import GenreDropDown from "./components/Selector/GenreDropDown/GenreDropDown.js";
import { defaultGenres, defaultMoods } from "./constants";

import "./components/global.scss";

export default function App() {
  const [genre, setGenre] = React.useState([]);
  const [mood, setMood] = React.useState([]);

  React.useEffect(() => {
    console.log(`Genres: ${genre}`);
    console.log(`Moods: ${mood}`);
  }, [genre, mood]);

  return (
    <>
      <NavBar />
      <Home />
      <GenreDropDown data={defaultGenres} setData={setGenre} />
    </>
  );
}
