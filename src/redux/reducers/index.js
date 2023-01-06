import { combineReducers } from "redux";
import {
  movieListReducer,
  movieDetailReducer,
  movieCreateReducer,
} from "./movie-reducer";

export const rootReducer = combineReducers({
  movieList: movieListReducer,
  movieDetails: movieDetailReducer,
  movieCreateDetail: movieCreateReducer,
});
