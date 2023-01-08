import React from "react";
import GenreDropDown from "./Selector/GenreDropDown/GenreDropDown.js";
import MoodDropDown from "./Selector/MoodDropDown/MoodDropDown.js";
import NumPlayDropDown from "./Selector/NumPlayDropDown/NumPlayDropDown.jsx";
import { defaultGenres, defaultMoods, defaultNumPlays } from "../constants.js";

import { FaArrowRight } from "react-icons/fa";
import add_photo_icon from "./assets/add_photo_icon.svg";
import add_playlist_icon from "./assets/add_playlist_icon.svg";
import playlist_icon from "./assets/playlist_icon.svg";

import "./global.scss";

export const Home = () => {
  const [genre, setGenre] = React.useState([]);
  const [mood, setMood] = React.useState([]);
  const [numPlay, setNumPlay] = React.useState([]);

  React.useEffect(() => {
    console.log(`Genres: ${genre}`);
    console.log(`Moods: ${mood}`);
    console.log(`NumPlay: ${numPlay}`);
  }, [genre, mood, numPlay]);

  return (
    <div className="home">
      <div className="description">
        <span id="desc-title">playlist.jpg</span>
        <span id="desc-info">Convert an image to a customized playlist</span>
        <div className="icons">
          <img src={add_photo_icon} id="icon1" alt="Add_photo_icon" />
          <FaArrowRight id="arrow1" />
          <img src={add_playlist_icon} id="icon2" alt="Add_playlist_icon" />
          <FaArrowRight id="arrow2" />
          <img src={playlist_icon} id="icon3" alt="Playlist_icon" />
        </div>
      </div>
      <div className="background">
        <span id="genre-dropdown">
          <GenreDropDown data={defaultGenres} setData={setGenre} />
        </span>
        <span id="mood-dropdown">
          <MoodDropDown data={defaultMoods} setData={setMood} />
        </span>
        <span id="numPlay-dropdown">
          <NumPlayDropDown data={defaultNumPlays} setData={setNumPlay} />
        </span>
      </div>
      <div className="upload">
        <button
          type="button"
          id="upload-button"
          onClick={() => console.log("upload-button clicked")}
        >
          Upload an image
        </button>
      </div>
    </div>
  );
};
