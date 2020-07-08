import { Movie, ADD_MOVIE, REMOVE_MOVIE, MoviesActionTypes } from './types'

export function addMovie(newMovie: Movie): MoviesActionTypes {
  return {
    type: ADD_MOVIE,
    payload: newMovie
  }
}

export function removeMovie(id: string): MoviesActionTypes {
  return {
    type: REMOVE_MOVIE,
    meta: {
      id
    }
  }
}