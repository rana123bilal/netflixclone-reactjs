import React, { useState, useEffect } from "react";
import "./nav-section.css";
import { DUMMY_DATA } from "../data";
import { useContext } from "react";
import DataContext from "../../context/data-context";
import { SORT_TYPES } from "../../Constants";

function NavSection() {
  const { setSortedMovieList } = useContext(DataContext);
  const [sortValue, setSortValue] = useState("");

  useEffect(() => {
    const sortMovieList = (type) => {
      const sortType = SORT_TYPES[type];
      const sorted = [...DUMMY_DATA].sort((a, b) =>
        a[sortType] < b[sortType] ? -1 : 1
      );
      setSortedMovieList(sorted);
    };
    sortMovieList(sortValue);
  }, [setSortedMovieList, sortValue]);

  return (
    <>
      <div className="links-container">
        <div className="left-links-container">
          <ul>
            <li>
              <a href="/">ALL</a>
            </li>
            <li>
              <a href="/">DOCUMENTARY</a>
            </li>
            <li>
              <a href="/">COMEDY</a>
            </li>
            <li>
              <a href="/">HORROR</a>
            </li>
            <li>
              <a href="/">CRIME</a>
            </li>
          </ul>
        </div>
        <div className="right-links-container">
          <div>SORT BY</div>
          <div>
            <select
              className="sort-options"
              onChange={(e) => setSortValue(e.target.value)}
            >
              <option value="title">TITLE</option>
              <option value="genre">GENRE </option>
              <option value="year">RELEASE YEAR</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default NavSection;
