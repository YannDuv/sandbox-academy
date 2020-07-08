import { MoviesReducer } from './movies/reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  movies: MoviesReducer
})

export type RootState = ReturnType<typeof rootReducer>