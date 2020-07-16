import React from "react";
import { Movie } from "../../../store/movies/types";
import { connect } from "react-redux";
import { RootState } from "../../../store";
import MovieShort from "../MovieShort/MovieShort";
import { getMovies } from "../../../store/movies/selectors";

type IProps = {
  movies: Movie[];
};

const MovieList = ({ movies }: IProps) => {
  return (
    <ul className="movies">
      {movies &&
        movies.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieShort movie={movie} />
            </li>
          );
        })}
    </ul>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    movies: getMovies(state),
  };
};

export default connect(mapStateToProps)(MovieList);
