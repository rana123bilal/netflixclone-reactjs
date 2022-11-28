import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Movies.css";
import { DUMMY_DATA } from "../data";
import { useContext } from "react";
import DataContext from "../../context/data-context";

export default function AddMovie() {
  const { toggleMovieModal, setToggleMovieModal, setSortedMovieList, sortedMovieList } = useContext(DataContext);
  const [inputMovieData, setInputMovieData] = useState({
    title: "",
    releaseDate: "",
    movieURL: "",
    rating: "",
    genre: "",
    runtime: "",
    overview: "",
  });

  function titleInputHandler(event) {
    setInputMovieData({ ...inputMovieData, title: event.target.value });
  }
  function URLInputHandler(event) {
    setInputMovieData({ ...inputMovieData, movieURL: event.target.value });
  }
  function genreInputHandler(event) {
    setInputMovieData({ ...inputMovieData, genre: event.target.value });
  }
  function releaseDateInputHandler(event) {
    setInputMovieData({ ...inputMovieData, releaseDate: event.target.value });
  }
  function ratingInputHandler(event) {
    setInputMovieData({ ...inputMovieData, rating: event.target.value });
  }
  function runtimeInputHandler(event) {
    setInputMovieData({ ...inputMovieData, runtime: event.target.value });
  }
  function overviewInputHandler(event) {
    setInputMovieData({ ...inputMovieData, overview: event.target.value });
  }

  function addMovieHandler(event) {
    event.preventDefault();
    const { title, releaseDate, movieURL, rating, genre, runtime, overview } = inputMovieData;
    const year = releaseDate.split("-")[0];
    const id = sortedMovieList.length + 1;
    const newMovieDetails = {
      title,
      year,
      movieURL,
      rating,
      genre,
      runtime,
      overview,
      id,
    };
    setSortedMovieList([...DUMMY_DATA, newMovieDetails]);

    setInputMovieData({
      title: "",
      releaseDate: "",
      movieURL: "",
      rating: "",
      genre: "",
      runtime: "",
      overview: "",
    });
  }
  return (
    <div>
      <Modal
        open={toggleMovieModal}
        onClose={() => setToggleMovieModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className="addMovieModal">
            <div className="head">
            <h2>ADD MOVIE</h2>
            <CloseIcon className="closeicon" onClick={() => setToggleMovieModal(false)}/>
            </div>
            <form>
              <div className="left">
                <div className="form-title">
                  <label>TITLE</label>
                  <input
                    type="text"
                    placeholder="Enter Title"
                    onChange={titleInputHandler}
                    value={inputMovieData.title}
                  />
                </div>
                <div className="URL">
                  <label>MOVIE URL</label>
                  <input
                    type="text"
                    placeholder="Enter URL"
                    onChange={URLInputHandler}
                    value={inputMovieData.movieURL}
                  />
                </div>
                <div className="genre">
                  <label>GENRE</label>
                  <select
                    className="options"
                    onChange={genreInputHandler}
                    value={inputMovieData.genre}
                  >
                    <option type="checkbox">SELECT GENRE</option>
                    <option>ACTION</option>
                    <option>COMEDY</option>
                    <option>DRAMA</option>
                    <option>HORROR</option>
                  </select>
                </div>
              </div>
              <div className="right">
                <div className="date">
                  <label>RELEASE DATE</label>
                  <input
                    type="date"
                    placeholder="Enter Release Date"
                    onChange={releaseDateInputHandler}
                    value={inputMovieData.releaseDate}
                  />
                </div>
                <div className="ratings">
                  <label>RATINGS</label>
                  <input
                    type="number"
                    placeholder="Enter Rating"
                    onChange={ratingInputHandler}
                    value={inputMovieData.rating}
                  />
                </div>
                <div className="runtime">
                  <label>RUNTIME</label>
                  <input
                    type="text"
                    placeholder="Enter Minutes"
                    onChange={runtimeInputHandler}
                    value={inputMovieData.runtime}
                  />
                </div>
              </div>

              <div className="text-area">
                <label>OVERVIEW</label>
                <textarea
                  type="textarea"
                  placeholder="Enter Description"
                  onChange={overviewInputHandler}
                  value={inputMovieData.overview}
                />
              </div>
              <div className="buttons">
                <button type="reset" className="reset">
                  RESET
                </button>
                <button
                  type="submit"
                  className="submit"
                  onClick={addMovieHandler}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
