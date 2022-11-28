import React from "react";
import MediaCard from "./media-card";
import "./card-list.css";
import { Grid } from "@mui/material";
import { useContext } from "react";
import DataContext from "../../context/data-context";

function CardList() {
  const { inputSearchedTerm, sortedMovieList } = useContext(DataContext);
  const filteredMovieList = sortedMovieList.filter((val) => {
    if (inputSearchedTerm !== "") {
      return val.title
        .toLocaleLowerCase()
        .includes(inputSearchedTerm.toLocaleLowerCase());
    }
    return val;
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
