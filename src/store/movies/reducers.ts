import { MoviesState,MoviesActionTypes, UPDATE_MOVIES } from "./types"

const initialState: MoviesState = {
    movies: [],
}

export function MoviesReducer(
    state = initialState,
    action: MoviesActionTypes
): MoviesState {
    switch (action.type) {
        case UPDATE_MOVIES:
            return {
                movies: action.payload
            }
        default:
            return state
    }
}