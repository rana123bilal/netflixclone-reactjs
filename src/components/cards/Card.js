import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

function Card({ title, image, year, genre }) {
  return (
    <div className="card" data-testid="card-1">
      <div className="card-body">
        <img src={image} alt="Avatar" />
        <div className="text">
          <div className="title">
            <h3>{title}</h3>
            <p>{genre}</p>
          </div>
          <div>
            <p className="year">{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  genre: PropTypes.string,
};

export default Card;
