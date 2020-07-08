import { MoviesState,MoviesActionTypes, ADD_MOVIE, REMOVE_MOVIE } from "./types"

const initialState: MoviesState = {
    movies: []
}

export function MoviesReducer(
    state = initialState,
    action: MoviesActionTypes
): MoviesState {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                movies: [...state.movies, action.payload]
            }
        case REMOVE_MOVIE:
            return {
                movies: state.movies.filter(
                movie => movie.id !== action.meta.id
                )
            }
        default:
            return state
    }
}