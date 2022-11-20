import React from "react";
import MediaCard from "./Card";
import "./CardList.css";
import { Grid } from "@mui/material";

function CardList({
  setOpenEditMovieModal,
  setOpenDeleteMovieModal,
  searchedTerm,
  openEditMovieModal,
  openDeleteMovieModal,
  sortedList,
  getId
}) {
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
              getId={getId}
              id={movie.id}
                title={movie.title}
                image={movie.movieURL}
                genre={movie.genre}
                year={movie.year}
                setOpenEditMovieModal={setOpenEditMovieModal}
                setOpenDeleteMovieModal={setOpenDeleteMovieModal}
                openEditMovieModal={openEditMovieModal}
                openDeleteMovieModal={openDeleteMovieModal}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default CardList;
