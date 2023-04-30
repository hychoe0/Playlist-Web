import React, { Component } from "react";
import { CLIENT_ID, CLIENT_SECRET } from "../../Credential.js";
import { ARTIST, RECOMMENDATION } from "../../constants.js";

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

      var url = `${RECOMMENDATION}?seed`;
      fetch(RECOMMENDATION, {
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
