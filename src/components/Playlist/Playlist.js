import React, { Component } from "react";
import { CLIENT_ID, CLIENT_SECRET } from "../../Credential.js";

import { SPOTIFY, ARTIST, RECOMMENDATION } from "../../constants.js";

import { Home } from "../Home.js";

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
        "&seed_artists=3XHO7cRUPCLOr6jwp8vsx5" +
        "&seed_genres=" +
        `${Home.genre}` +
        "&seed_tracks=126TblwXGNTUZ7RPMnThkU";

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
  console.log(Home.genre);
}
