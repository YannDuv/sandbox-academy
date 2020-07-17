export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export interface MoviesState {
  movies: Movie[];
}

export const UPDATE_MOVIES = "UPDATE_MOVIES";

interface UpdateMoviesAction {
  type: typeof UPDATE_MOVIES;
  payload: Movie[];
}

export type MoviesActionTypes = UpdateMoviesAction;
