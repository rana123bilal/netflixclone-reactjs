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
  MOVIE_CREATE_REQUEST,
  MOVIE_CREATE_SUCCESS,
  MOVIE_CREATE_FAIL,
  MOVIE_EDIT_REQUEST,
  MOVIE_EDIT_SUCCESS,
  MOVIE_EDIT_FAIL,
  GET_MOVIE_BY_ID_REQUEST,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIE_BY_ID_FAIL,
  MOVIE_DELETE_REQUEST,
  MOVIE_DELETE_SUCCESS,
  MOVIE_DELETE_FAIL,
  RESET_CREATE_MOVIE_STATE,
} from "../constants/movieConstant";

const initialState = {
  loading: false,
  movies: [],
  success: false,
};
const intialMovieDetailState = {
  movie: {},
};

export function movieListReducer(state = initialState, { type, payload }) {
  switch (type) {
    case MOVIE_LIST_REQUEST:
      return {
        loading: true,
        movies: [],
        success: false,
      };
    case MOVIE_LIST_SUCCESS:
      return {
        loading: false,
        movies: payload,
        success: true,
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
        movies: payload,
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
        movies: payload,
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
        movies: payload,
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
        movies: payload,
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

export const movieDetailReducer = (
  state = intialMovieDetailState,
  { type, payload }
) => {
  switch (type) {
    case MOVIE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case MOVIE_DETAILS_SUCCESS:
      return { loading: false, movie: payload };
    case MOVIE_DETAILS_FAIL:
      return { loading: false, error: payload };
    case GET_MOVIE_BY_ID_REQUEST:
      return { ...state, loading: true };
    case GET_MOVIE_BY_ID_SUCCESS:
      return { loading: false, movie: payload };
    case GET_MOVIE_BY_ID_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const movieCreateReducer = (
  state = { loading: false, success: false, status: null },
  { type, payload }
) => {
  switch (type) {
    case MOVIE_CREATE_REQUEST:
      return { ...state, loading: true };
    case MOVIE_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        status: payload,
      };
    case MOVIE_CREATE_FAIL:
      return { loading: false, error: payload, success: false };
    case RESET_CREATE_MOVIE_STATE:
      return { ...state, success: false };
    default:
      return state;
  }
};

export const movieEditReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIE_EDIT_REQUEST:
      return { ...state, loading: true };
    case MOVIE_EDIT_SUCCESS:
      return { loading: false, movies: [...state.movies, payload] };
    case MOVIE_EDIT_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const movieDeleteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIE_DELETE_REQUEST:
      return { loading: true };
    case MOVIE_DELETE_SUCCESS:
      return { loading: false };
    case MOVIE_DELETE_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
