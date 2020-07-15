import React from "react";
import "./MovieList.css";
import { Movie } from "../../../store/movies/types";
import { connect } from 'react-redux';
import { RootState } from '../../../store';
import MovieShort from '../MovieShort/MovieShort';

type IProps ={
  movies: Movie[],
};

let MovieList = ({movies}: IProps) => {
  return (
    <ul className="movies">
        {movies.map((movie) => {
          return <li key={movie.id}>
            <MovieShort movie={movie}/>
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
