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
import axios from "axios";

export const fetchMovieList = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_LIST_REQUEST });
    const response = await axios.get("/movies");
    dispatch({ type: MOVIE_LIST_SUCCESS, payload: response.data.data });
  } catch (error) {
    dispatch({
      type: MOVIE_LIST_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const sortMovieList = (query) => async (dispatch) => {
  try {
    dispatch({ type: SORT_LIST_REQUEST });
    const response = await axios.get(`/movies?sortBy=${query}&sortOrder=desc`);
    dispatch({ type: SORT_LIST_SUCCESS, payload: response.data.data });
  } catch (error) {
    dispatch({
      type: SORT_LIST_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const searchMoviesByTitle = (search) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_LIST_BY_TITLE_REQUEST });
    const response = await axios.get(`/movies?search=${search}&searchBy=title`);
    dispatch({
      type: SEARCH_LIST_BY_TITLE_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_LIST_BY_TITLE_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const searchMoviesByGenres = (search) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_LIST_BY_GENRES_REQUEST });

    const response = await axios.get(
      `/movies?search=${search}&searchBy=genres`
    );
    dispatch({
      type: SEARCH_LIST_BY_GENRES_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_LIST_BY_GENRES_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listMovieDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_DETAILS_REQUEST });
    const response = await axios.get(`/movies/${id}`);
    dispatch({
      type: MOVIE_DETAILS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const filterMoviesByGenres = (query) => async (dispatch) => {
  try {
    dispatch({ type: FILTER_LIST_REQUEST });
    const response = await axios.get(`/movies?filter=${query}`);
    dispatch({ type: FILTER_LIST_SUCCESS, payload: response.data.data });
  } catch (error) {
    dispatch({
      type: FILTER_LIST_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
