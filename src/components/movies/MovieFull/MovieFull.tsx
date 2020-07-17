import React, { useEffect } from "react";
import { Movie } from "../../../store/movies/types";
import MovieShort from "../MovieShort/MovieShort";
import { apiKey } from "../../../utils/api-key";
import { MemoryRouter } from "react-router-dom";

type IProps = {
  movie: Movie;
};

function getAlternateMovies(key: string, movieId: number) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${key}&language=en-US`
  )
    .then((response) => response.json())
    .then((json) => json.results);
}

function MovieFull({ movie }: IProps) {
  const [alternateMovies, setAlternateMovies] = React.useState<Movie[]>([]);
  const { id } = movie;

  useEffect(() => {
    getAlternateMovies(apiKey, id).then((newMovies) => {
      if (newMovies) {
        setAlternateMovies(
          newMovies.filter((movie: Movie) => movie !== undefined)
        );
      }
    });
  }, [id]);

  return (
    <MemoryRouter>
      <div className="movie-full">
        <h1>{movie.title}</h1>
        <div className="movie-info">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className="poster"
            alt=""
          />
          <div className="movie-description">{movie.overview}</div>
        </div>
        <ul className="alternate-movies-list">
          {alternateMovies &&
            alternateMovies.map((movie: Movie) => {
              return (
                <li key={movie.id} className="movie-item">
                  <MovieShort movie={movie} />
                </li>
              );
            })}
        </ul>
      </div>
    </MemoryRouter>
  );
}

export default MovieFull;