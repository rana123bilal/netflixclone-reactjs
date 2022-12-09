import React, { useState, useEffect } from "react";
import "./nav-section.css";
import { useDispatch } from "react-redux";
import SORT_TYPES from "../../Constants.js";
import {
  sortMovieList,
  filterMoviesByGenres,
} from "../../redux/actions/movie-actions";

function NavSection() {
  const [sortValue, setSortValue] = useState("none");
  const dispatch = useDispatch();
  useEffect(() => {
    const sortMovies = (type) => {
      const sortType = SORT_TYPES[type];
      dispatch(sortMovieList(sortType));
    };
    if (sortValue !== "none") {
      sortMovies(sortValue);
    }
  }, [dispatch, sortValue]);

  const genres = ["drama", "action", "comedy", "crime"];

  return (
    <>
      <div className="links-container">
        <div className="left-links-container">
          <ul>
            {genres.map((item, i) => (
              <li
                className="genre-list"
                key={i}
                onClick={() => dispatch(filterMoviesByGenres(item))}
              >
                {item.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
        <div className="right-links-container">
          <div>SORT BY</div>
          <div>
            <select
              className="sort-options"
              onChange={(e) => setSortValue(e.target.value)}
            >
              <option value="select">SELECT</option>
              <option value="title">TITLE</option>
              <option value="genres">GENRES </option>
              <option value="vote_average">RATING </option>
              <option value="release_date">RELEASE YEAR</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default NavSection;
