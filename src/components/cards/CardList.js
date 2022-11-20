import React from "react";
import MediaCard from "./Card";
import "./CardList.css";
import { Grid } from "@mui/material";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

function CardList() {
  const { searchedTerm, sortedList } = useContext(DataContext);
  const finalMovies = sortedList.filter((val) => {
    if (searchedTerm !== "") {
      return val.title
        .toLocaleLowerCase()
        .includes(searchedTerm.toLocaleLowerCase());
    }
    return val;
  });

  return (
    <>
      <div className="found-movies">{finalMovies.length} movies found</div>
      <Grid>
        {finalMovies.map((movie, i) => {
          return (
            <Grid className="wrapper" key={i}>
              <MediaCard
                id={movie.id}
                title={movie.title}
                image={movie.movieURL}
                genre={movie.genre}
                year={movie.year}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default CardList;
