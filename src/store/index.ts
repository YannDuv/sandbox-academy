import { MoviesReducer } from "./movies/reducers";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const rootReducer = combineReducers({
  moviesState: MoviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const composeEnhancers = composeWithDevTools({
  features: {
    pause: true, // start/pause recording of dispatched actions
    lock: true, // lock/unlock dispatching actions and side effects
    persist: true, // persist states on page reloading
    jump: true, // jump back and forth (time travelling)
    skip: true, // skip (cancel) actions
    reorder: true, // drag and drop actions in the history list
    dispatch: true, // dispatch custom actions or action creators
  },
});
