import React from "react";
import MediaCard from "./media-card";
import "./card-list.css";
import { Grid } from "@mui/material";
import { useContext } from "react";
import DataContext from "../../context/data-context";

function CardList() {
  const { inputSearchTerm, sortedMovieList } = useContext(DataContext);
  const filteredMovieList = sortedMovieList.filter((value) => {
    if (inputSearchTerm !== "") {
      return value.title
        .toLocaleLowerCase()
        .includes(inputSearchTerm.toLocaleLowerCase());
    }
    return value;
  });

  return (
    <>
      <div className="found-movies">{filteredMovieList.length} movies found</div>
      <Grid>
        {filteredMovieList.map((movie, i) => {
          return (
            <Grid className="card-wrapper" key={i}>
              <MediaCard
                id={movie.id}
                title={movie.title}
                image={movie.movieURL}
                genre={movie.genre}
                year={movie.year.toString()}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default CardList;
