import React from "react";
import Movie from "./Movie";

const MoviesList = props => {
  return (
    <div className="movies">
      {props.movies.map((movie, i) => (
        <Movie key={i} src={movie.src} title={movie.title} rank={movie.rank} />
      ))}
    </div>
  );
};

export default MoviesList;
