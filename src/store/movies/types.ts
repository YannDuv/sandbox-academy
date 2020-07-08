export interface Movie {
    id: string;
    title: string;
    poster_path: string;
}

export interface MoviesState {
    movies: Movie[]
}

export const ADD_MOVIE = 'ADD_MOVIE'
export const REMOVE_MOVIE = 'REMOVE_MOVIE'

interface AddMovieAction {
  type: typeof ADD_MOVIE;
  payload: Movie;
}

interface RemoveMovieAction {
  type: typeof REMOVE_MOVIE;
  meta: {
    id: string;
  }
}

export type MoviesActionTypes = AddMovieAction | RemoveMovieAction