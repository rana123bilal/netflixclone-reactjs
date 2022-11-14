import React from "react";
import Card from "./Card";
import "./CardList.css";
import { DUMMY_DATA } from "../data";
import { Grid } from "@mui/material";

function CardList() {
  return (
    <>
      <Grid>
      {DUMMY_DATA.map((movies, i) => {
        return (
          <Grid className="wrapper" key={i}>
            <Card
              title={movies.title}
              image={movies.image}
              genre={movies.genre}
              year={movies.year}
            />
          </Grid>
        );
      })}
      </Grid>
    </>
  );
}

export default CardList;
