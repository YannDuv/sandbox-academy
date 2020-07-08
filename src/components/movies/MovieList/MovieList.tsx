import React from "react";
import "./MovieList.css";
import { Movie } from "../../../store/movies/types";

type IProps = {
  movies: Movie[];
}

export const MovieList = ({ movies }: IProps) => {
  return (
      <ul className="movies">
        {movies.map((movie, index) => {
          return <li key={movie.id}>
            <figure className="movie">
              <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} className="poster" alt="" />
              <figcaption className="title">{movie.title}</figcaption>
            </figure>
          </li>
        })}
      </ul>
  );
};