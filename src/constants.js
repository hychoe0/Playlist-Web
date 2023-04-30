export const defaultGenres = [
  { value: "random", label: "Random" },
  { value: "hiphop", label: "Hip-hop" },
  { value: "pop", label: "Pop" },
];
export const defaultMoods = [
  { value: "chill", label: "Chill" },
  { value: "sentimental", label: "Sentimental" },
];
export const defaultNumPlays = [
  { value: "fresh", label: "Fresh Finds (< 100,000 plays)" },
  { value: "indie", label: "Indie Mix (< 5,000,000 plays)" },
  { value: "pop", label: "Popular Music (> 50,000,000 plays)" },
];

export const moodValues = {
  chill: {
    target_acousticness: 0.8,
    target_danceability: 0.2,
    // ...
  },
};
export const ARTIST =
  "https://api.spotify.com/v1/recommendations/available-genre-seeds";
export const RECOMMENDATION = "https://api.spotify.com/v1/recommendations";
