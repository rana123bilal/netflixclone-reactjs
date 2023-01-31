import React from "react";
import logo from "../../assets/images/logo.png";
import "./header-1.css";
import { useContext } from "react";
import DataContext from "../../context/data-context";

function Header() {
  const { setToggleMovieModal } = useContext(DataContext);
  function showAddMovieModal() {
    setToggleMovieModal(true);
  }

  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="netflix-roulette" />
      </div>
      <div>
        <button
          className="add-movie-btn"
          onClick={() => {
            showAddMovieModal();
          }}
        >
          + ADD MOVIE
        </button>
      </div>
    </div>
  );
}

export default Header;
