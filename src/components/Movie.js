import React from "react";
import Rating from "./Rating";

const Movie = props => {
  return (
    <div className="movie">
      <img src={props.src} alt="" />
      <i className="fas fa-play-circle" />
      <br />
      <p>{props.title}</p>
      <Rating className="rating" rank={props.rank} />
    </div>
  );
};

export default Movie;
