import React, { useState } from "react";
import "./Search.css";
import { useContext } from "react";
import DataContext from "../../context/data-context";

function Search() {
  const { setInputSearchTerm } = useContext(DataContext);
  const [search, setSearch] = useState("");

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const searchButtonHandler = (event) => {
    event.preventDefault();
    setInputSearchTerm(search);
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
