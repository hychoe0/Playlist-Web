import React from "react";
import { FaArrowRight } from "react-icons/fa";
import add_photo_icon from "./assets/add_photo_icon.svg";
import add_playlist_icon from "./assets/add_playlist_icon.svg";
import playlist_icon from "./assets/playlist_icon.svg";

import "./global.scss";

export const Home = () => {
  return (
    <div id="home">
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
    </div>
  );
};
