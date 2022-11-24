import React from "react";
import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/data-context";
import SearchIcon from "@mui/icons-material/Search";
import { DUMMY_DATA } from "../data";

function ViewMovie() {
  const { setViewMovieDetails, movieId } = useContext(DataContext);
  const [viewMovie, setViewMovie] = useState(null);

  useEffect(() => {
    const foundMovie = DUMMY_DATA.find((movie) => movie.id === movieId);
    setViewMovie(foundMovie);
  }, [movieId, viewMovie]);

  function onclickSearch() {
    setViewMovieDetails(false);
  }

  return (
    <>
      {viewMovie && (
        <div className="movie-container">
          <div className="image-container">
            <img src={viewMovie.movieURL} alt="cardimage" />
          </div>
          <div className="data-container">
            <h2>{viewMovie.title}</h2>
            <p>{viewMovie.genre}</p>
            <div className="h2-heading">
              <h3 className="release-year">{viewMovie.year}</h3>
              <h3 className="duration">{viewMovie.runtime}</h3>
            </div>
            <p>{viewMovie.overview}</p>
          </div>
          <SearchIcon className="searchIcon" onClick={onclickSearch} />
        </div>
      )}
    </>
  );
}

export default ViewMovie;
