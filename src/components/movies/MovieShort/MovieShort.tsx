import React from "react";
import { Movie } from "../../../store/movies/types";
import { Link } from "react-router-dom";

type IProps = {
  movie: Movie;
};

function MovieShort({ movie }: IProps) {
  return (
    <Link to={`/q=${movie.id}`}>
      <figure className="movie-short">
        <img
          src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
          className="movie-thumbnail"
          alt={movie.title}
        />
        <figcaption className="movie-caption">{movie.title}</figcaption>
      </figure>
    </Link>
  );
}

export default MovieShort;
