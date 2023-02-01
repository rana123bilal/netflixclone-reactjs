import React, { useState } from "react";
import "./search.css";
import { useNavigate } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const searchMovies = (event) => {
    event.preventDefault();
    if (search !== "") {
      navigate(`/search/movies?search=${search}&searchBy=title`);
    }
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
          <button onClick={searchMovies} className="search-button">
            SEARCH
          </button>
        </div>
      </div>
    </>
  );
}

export default Search;
