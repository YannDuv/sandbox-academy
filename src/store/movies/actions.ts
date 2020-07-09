import { Movie, UPDATE_MOVIES, MoviesActionTypes } from './types'

export function updateMovies(newMovies: Movie[]): MoviesActionTypes {
  return {
    type: UPDATE_MOVIES,
    payload: newMovies
  }
}