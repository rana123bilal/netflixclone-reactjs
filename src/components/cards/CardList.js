import React from "react";
import Card from "./Card";
import "./CardList.css";
import { DUMMY_DATA } from "../data";
import { Grid } from "@mui/material";

function CardList({ setOpenEditMovieModal, setOpenDeleteMovieModal, searchedTerm }) {

  const finalMovies = DUMMY_DATA.filter((val) => {
    if(searchedTerm == ''){
      return val
    }else if (val.title.toLocaleLowerCase().includes(searchedTerm.toLocaleLowerCase())){
      return val
    }
  })
  const sortedArr = finalMovies.sort((a,b) => a.title.localeCompare(b.title))

  return (
    <>
    <div className="found-movies">{finalMovies.length} movies found</div>
      <Grid>
        {sortedArr.map((movies, i) => {
          return (
            <Grid className="wrapper" key={i}>
              <Card
                title={movies.title}
                image={movies.image}
                genre={movies.genre}
                year={movies.year}
                setOpenEditMovieModal={setOpenEditMovieModal}
                setOpenDeleteMovieModal={setOpenDeleteMovieModal}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default CardList;
