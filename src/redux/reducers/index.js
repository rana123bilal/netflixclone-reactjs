import { combineReducers } from "redux";
import { movieListReducer, movieDetailReducer } from "./movie-reducer";

export const rootReducer = combineReducers({
  movieList: movieListReducer,
  movieDetails: movieDetailReducer,
});
