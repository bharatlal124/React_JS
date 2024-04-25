import React from "react";
import AnimeCard from "./AnimeCard.js";

// Complete the AnimeList Component
const AnimeList = ({ anime }) => {
  // render() {
  return (
    <div className="anime-list">
      {/* Map the anime list recieved through props and pass the details to the Animecard component*/}
      {anime.map((animeItem, index) => (
        <AnimeCard key={index} image={animeItem.image} name={animeItem.name} />
      ))}
    </div>
  );
};

export default AnimeList;
