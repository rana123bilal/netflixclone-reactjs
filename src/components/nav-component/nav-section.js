import React, { useState, useEffect } from "react";
import "./nav-section.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { genreListforNav } from "../../Constants.js";

function NavSection() {
  const [sortValue, setSortValue] = useState("none");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (sortValue !== "none") {
      navigate(`/search/${sortValue}`);
    }
  }, [dispatch, sortValue]);

  const filterMovies = (genre) => {
    if (genre !== "all") {
      navigate(`/search/${genre}`);
    } else {
      navigate(`/search`);
    }
  };

  return (
    <>
      <div className="links-container">
        <div className="left-links-container">
          <ul>
            {genreListforNav.map((item, i) => (
              <li
                className="genre-list"
                key={i}
                onClick={() => filterMovies(item)}
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
