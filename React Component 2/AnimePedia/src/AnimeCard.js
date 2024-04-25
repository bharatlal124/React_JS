import React from "react";

// Complete the AnimeCard Component
const AnimeCard = ({ image, name }) => {
  // render() {
  return (
    <div className="anime-card">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default AnimeCard;
