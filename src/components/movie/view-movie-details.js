import React from "react";
import { useContext } from "react";
import Grid from "@mui/material/Grid";
import logo from "../../assets/images/logo2.png";
import oval from "../../assets/images/Oval.png";
import { useSelector } from "react-redux";
import DataContext from "../../context/data-context";
import SearchIcon from "@mui/icons-material/Search";

function ViewMovie() {
  const { setViewMovieDetails, viewMovieDetails } = useContext(DataContext);

  const movieDetails = useSelector((state) => state.movieDetails);
  const { movie } = movieDetails;

  function closeViewMovieDetails() {
    setViewMovieDetails(false);
  }
  const addDefaultSourceImage = (event) => {
    event.target.src = "https://ranobehub.org/img/ranobe/posters/default.jpg";
  };

  return (
    <>
      {viewMovieDetails && (
        <Grid container spacing={2}>
          <div className="top-header">
            <img className="logo2" src={logo} alt="logo2" />
            <SearchIcon
              className="searchIcon"
              onClick={closeViewMovieDetails}
            />
          </div>
          <div className="movie-container">
            <div className="image-container">
              <img
                src={movie?.poster_path}
                alt="cardimage"
                onError={addDefaultSourceImage}
              />
            </div>
            <div className="data-container">
              <div className="viewMovie-title">
                <h2>{movie?.title}</h2>
                <img src={oval} alt="oval-shape" />
                <h4>{movie?.vote_average}</h4>
              </div>
              <p className="genre-view">
                {movie?.genres?.map((g) => g + ", ")}
              </p>
              <div className="year-time">
                <h3 className="release-year">{movie?.release_date}</h3>
                <h3 className="duration">{movie?.runtime}</h3>
              </div>
              <p>{movie?.overview}</p>
            </div>
          </div>
          <span></span>
        </Grid>
      )}
    </>
  );
}

export default ViewMovie;
