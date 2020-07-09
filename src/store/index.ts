import { MoviesReducer } from './movies/reducers'
import { combineReducers, createStore } from 'redux'

export const rootReducer = combineReducers({
  moviesState: MoviesReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);