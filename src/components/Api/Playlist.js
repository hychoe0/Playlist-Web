import React, { Component } from "react";
import { CLIENT_ID, CLIENT_SECRET } from "../../Credential.js";

import { SPOTIFY, ARTIST, RECOMMENDATION, vibeSeeds } from "../../constants.js";

import { getGenre } from "../Selector/GenreDropDown/GenreDropDown.js";
import {
  getVibe,
  getScores
} from "../Selector/VibeDropDown/VibeDropDown.js";

import "./Playlist.scss";

export function Playlist() {
  const access_url =
    "grant_type=client_credentials&client_id=" +
    CLIENT_ID +
    "&client_secret=" +
    CLIENT_SECRET;

  fetch(SPOTIFY, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: access_url,
  })
    .then((response) => response.json())
    .then((data) => {
      const ACCESS_TOKEN = data.access_token;

      var url =
        RECOMMENDATION +
        "?limit=10" +
        // "&seed_artists=3XHO7cRUPCLOr6jwp8vsx5" +
        "&seed_genres=" +
        getGenre() +
        // "&seed_tracks=126TblwXGNTUZ7RPMnThkU" +
        "&target_acousticness=" +
        getScores().at(0) +
        "&target_danceability=" +
        getScores().at(1) +
        "&target_energy=" +
        getScores().at(2) +
        "&target_loudness=" +
        getScores().at(3);

      fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
  // console.log("?limit=10" +
  // "&seed_artists=3XHO7cRUPCLOr6jwp8vsx5" +
  // "&seed_genres=" +
  // getGenre() +
  // "&seed_tracks=126TblwXGNTUZ7RPMnThkU" +
  // "&target_acousticness=" +
  // getScores().at(0) +
  // "&target_danceability=" +
  // getScores().at(1) +
  // "&target_energy=" +
  // getScores().at(2) +
  // "&target_loudness=" +
  // getScores().at(3));
}
