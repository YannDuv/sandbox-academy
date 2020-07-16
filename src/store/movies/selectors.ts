import { RootState } from "..";

export const getMovies = (state: RootState) => state.moviesState.movies;
