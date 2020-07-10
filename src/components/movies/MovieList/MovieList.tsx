import React from "react";
import "./MovieList.css";
import { Movie } from "../../../store/movies/types";
import { connect } from 'react-redux';
import { RootState } from '../../../store';

type IProps ={
  movies: Movie[],
};

let MovieList = ({movies}: IProps) => {
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

const getMovies = (state: RootState) => state.moviesState.movies;

const mapStateToProps = (state: RootState) => {
  return {
    movies: getMovies(state),
  }
}

export default connect(mapStateToProps)(MovieList);
