import React, { Component } from "react";
import { CLIENT_ID, CLIENT_SECRET } from "../../Credential.js";

import "./Playlist.scss";

export function Playlist() {
  fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials&client_id=49c7ad3f813c40b6a8fb8bf68c99839a&client_secret=b5411f07013349b9b97e633859093366",
  })
    .then((response) => response.json())
    .then((data) => {
      const ACCESS_TOKEN = data.access_token;
      var rec_endpoint =
        //"https://api.spotify.com/v1/recommendations";

        "https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA";
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
}
