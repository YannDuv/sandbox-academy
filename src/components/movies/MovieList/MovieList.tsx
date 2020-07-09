import React from "react";
import "./MovieList.css";
import { Movie } from "../../../store/movies/types";
import { RootState, store } from "../../../store";

function select(state: RootState) {
  return state.moviesState.movies;
}

export const MovieList = () => {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  
  function handleChange() {
    let newMovies: Movie[] = select(store.getState())

    if (newMovies.filter(item => movies.indexOf(item) < 0).length > 0) {
      setMovies(newMovies);
    }
    
  }
  
  store.subscribe(handleChange);
  
  return (
    <ul className="movies">
        {movies.map((movie) => {
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
