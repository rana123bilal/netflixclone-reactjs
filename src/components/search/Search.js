import React, { useState } from "react";
import "./Search.css";
import { useDispatch } from "react-redux";
import {
  searchMoviesByTitle,
  searchMoviesByGenres,
} from "../../redux/actions/movie-actions";

function Search() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const genres = [
    "drama",
    "fantasy",
    "romance",
    "family",
    "mystery",
    "science fiction",
    "thriller",
    "action",
    "comedy",
    "crime",
  ];

  const searchButtonHandler = (event) => {
    event.preventDefault();
    if (search !== "") {
      if (genres.includes(search)) {
        dispatch(searchMoviesByGenres(search));
        return;
      }
      dispatch(searchMoviesByTitle(search));
    }
    setSearch("");
  };

  return (
    <>
      <div className="search-container">
        <h1 className="main-title">Find your Movie</h1>
        <div className="input-container">
          <input
            type="search"
            placeholder="what do you want to watch?"
            onChange={onSearchChange}
            value={search}
            className="search-input"
          />
          <button onClick={searchButtonHandler} className="search-button">
            SEARCH
          </button>
        </div>
      </div>
    </>
  );
}

export default Search;
