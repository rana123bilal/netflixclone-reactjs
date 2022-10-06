import React from "react";
import "./Card.css";

function Card({title, image, year, genre}) {
  
  return (   
    <div className="card">
      <div className="card-body">
        <img src={image} alt="Avatar" />
        <div class="text">
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

export default Card;
