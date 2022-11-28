import React from "react";
import { useContext, useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import logo from "../../assets/images/logo2.png";
import oval from "../../assets/images/Oval.png";
import DataContext from "../../context/data-context";
import SearchIcon from "@mui/icons-material/Search";
import { DUMMY_DATA } from "../data";

function ViewMovie() {
  const { setViewMovieDetails, movieId } = useContext(DataContext);
  const [viewMovieData, setViewMovieData] = useState(null);

  useEffect(() => {
    const findMovieDataWithId = DUMMY_DATA.find((movie) => movie.id === movieId);
    setViewMovieData(findMovieDataWithId);
  }, [movieId, viewMovieData]);

  function closeViewMovieDetails() {
    setViewMovieDetails(false);
  }

  return (
    <>
      {viewMovieData && (
        <Grid container spacing={2}>
        <div className="top-header">
          <img className="logo2" src={logo} alt="logo2" />
          <SearchIcon className="searchIcon" onClick={closeViewMovieDetails} />
          </div>
          <div className="movie-container">
            <div className="image-container">
              <img src={viewMovieData.movieURL} alt="cardimage" />
            </div>
            <div className="data-container">
              <div className="viewMovie-title">
              <h2>{viewMovieData.title}</h2>
              <img src={oval} alt="oval-shape"/>
              <h4>{viewMovieData.ratings}</h4>
              </div>
              <p className="genre-view">{viewMovieData.genre}</p>
              <div className="year-time">
                <h3 className="release-year">{viewMovieData.year}</h3>
                <h3 className="duration">{viewMovieData.runtime}</h3>
              </div>
              <p>{viewMovieData.overview}</p>
            </div>
          </div>
          <span></span>
        </Grid>
      )}
    </>
  );
}

export default ViewMovie;
