import React from "react";
import MediaCard from "./media-card";
import "./card-list.css";
import { Grid } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import DataContext from "../../context/data-context";

function CardList() {
  const { inputSearchTerm } = useContext(DataContext);

  const { loading, movies } = useSelector((state) => state.movieList);
  const filteredMovieList = movies?.filter((value) => {
    if (inputSearchTerm !== "") {
      return value.title
        .toLocaleLowerCase()
        .includes(inputSearchTerm.toLocaleLowerCase());
    }
    return value;
  });

  return (
    <>
      <div className="found-movies">
        {filteredMovieList?.length} movies found
      </div>
      <Grid>
        {loading && <h1 className="loading">Loading...</h1>}
        {movies?.map((movie, i) => {
          return (
            <Grid className="card-wrapper" key={i}>
              <MediaCard
                id={movie.id}
                title={movie.title}
                image={movie.poster_path}
                genre={movie.genres}
                year={movie.release_date.toString().split("-")[0]}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default CardList;
