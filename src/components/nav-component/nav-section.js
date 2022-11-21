import React, { useState, useEffect } from "react";
import "./nav-section.css";
import { DUMMY_DATA } from "../data";
import { useContext } from "react";
import DataContext from "../../context/data-context";
import { SORT_TYPES } from "../../Constants";

function NavSection() {
  const { setSortedList } = useContext(DataContext)
  const [sortValue, setSortValue] = useState("");

  useEffect(() => {
    const sortMovieList = (type) => {
      const sortProperty = SORT_TYPES[type];
      const sorted = [...DUMMY_DATA].sort((a, b) =>
        a[sortProperty] < b[sortProperty] ? -1 : 1
      );
      setSortedList(sorted);
    };
    sortMovieList(sortValue);
  }, [setSortedList, sortValue]);

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
              className="options"
              onChange={(e) => setSortValue(e.target.value)}
            >
              <option value="title">Title</option>
              <option value="genre">Genre </option>
              <option value="year">Release Year</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default NavSection;