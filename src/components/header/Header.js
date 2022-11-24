import React from "react";
import logo from "../../assets/images/logo.png";
import "./Header.css";
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
        <img src={logo} alt="netflixrullet" />
      </div>
      <div>
        <button
          className="add-movie"
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
