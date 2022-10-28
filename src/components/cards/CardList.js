import React from "react";
import Card from "./Card";
import "./CardList.css";
import { DUMMY_DATA } from "../data";

function CardList() {
  return (
    <div>
      {DUMMY_DATA.map((movies, i) => {
        return (
          <div className="wrapper" key={i}>
            <Card
              title={movies.title}
              image={movies.image}
              genre={movies.genre}
              year={movies.year}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CardList;
