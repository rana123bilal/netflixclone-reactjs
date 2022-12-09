import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  SORT_LIST_FAIL,
  SORT_LIST_SUCCESS,
  SORT_LIST_REQUEST,
  SEARCH_LIST_BY_TITLE_REQUEST,
  SEARCH_LIST_BY_TITLE_SUCCESS,
  SEARCH_LIST_BY_TITLE_FAIL,
  SEARCH_LIST_BY_GENRES_REQUEST,
  SEARCH_LIST_BY_GENRES_SUCCESS,
  SEARCH_LIST_BY_GENRES_FAIL,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAIL,
  FILTER_LIST_REQUEST,
  FILTER_LIST_SUCCESS,
  FILTER_LIST_FAIL,
} from "../constants/movieConstant";

const initialState = {
  loading: false,
  movies: [],
};
const intialMovieDetailState = {
  movie: {},
};

export function movieListReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_LIST_REQUEST:
      return {
        loading: true,
        movies: [],
      };
    case MOVIE_LIST_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
      };
    case MOVIE_LIST_FAIL:
      return {
        loading: false,
        error: true,
        movies: [],
      };
    case SORT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SORT_LIST_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
      };
    case SORT_LIST_FAIL:
      return {
        loading: false,
        error: true,
      };
    case SEARCH_LIST_BY_TITLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_LIST_BY_TITLE_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
      };
    case SEARCH_LIST_BY_TITLE_FAIL:
      return {
        loading: false,
        error: true,
      };
    case SEARCH_LIST_BY_GENRES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_LIST_BY_GENRES_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
      };
    case SEARCH_LIST_BY_GENRES_FAIL:
      return {
        loading: false,
        error: true,
      };
    case FILTER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FILTER_LIST_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
      };
    case FILTER_LIST_FAIL:
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}

export const movieDetailReducer = (state = intialMovieDetailState, action) => {
  switch (action.type) {
    case MOVIE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case MOVIE_DETAILS_SUCCESS:
      return { loading: false, movie: action.payload };
    case MOVIE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
