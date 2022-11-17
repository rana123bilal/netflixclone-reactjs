import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Movies.css";

export default function AddMovie({ openAddMovieModal, setOpenAddMovieModal }) {
  const [inputMovieData, setInputMovieData] = useState({
    title: "",
    releaseDate: "",
    movieUrl: "",
    rating: "",
    genre: "",
    runtime: "",
    overview: "",
  });

  function titleHandler(event) {
    setInputMovieData({ ...inputMovieData, title: event.target.value });
  }
  function URLHandler(event) {
    setInputMovieData({ ...inputMovieData, movieUrl: event.target.value });
  }
  function genreHandler(event) {
    setInputMovieData({ ...inputMovieData, genre: event.target.value });
  }
  function releaseDateHandler(event) {
    setInputMovieData({ ...inputMovieData, releaseDate: event.target.value });
  }
  function ratingHandler(event) {
    setInputMovieData({ ...inputMovieData, rating: event.target.value });
  }
  function runtimeHandler(event) {
    setInputMovieData({ ...inputMovieData, runtime: event.target.value });
  }
  function overviewHandler(event) {
    setInputMovieData({ ...inputMovieData, overview: event.target.value });
  }

  function addMovieHandler(event) {
    event.preventDefault();
    console.log(inputMovieData);
    setInputMovieData('')
  }

  const handleClose = () => setOpenAddMovieModal(false);

  return (
    <div>
      <Modal
        open={openAddMovieModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className="addMovieModal">
            <h2>Add Movie</h2>
            <form>
              <div className="left">
                <div className="form-title">
                  <label>Title</label>
                  <input
                    type="text"
                    placeholder="Enter Title"
                    onChange={titleHandler}
                    value={inputMovieData.title}
                  />
                </div>
                <div className="URL">
                  <label>Movie URL</label>
                  <input
                    type="text"
                    placeholder="Enter URL"
                    onChange={URLHandler}
                    value={inputMovieData.movieUrl}
                  />
                </div>
                <div>
                  <label>Genre</label>
                  <select className="options" onChange={genreHandler} value={inputMovieData.genre}>
                    <option>Select Genre</option>
                    <option>Action</option>
                    <option>Comedy</option>
                    <option>Drama</option>
                    <option>Horror</option>
                  </select>
                </div>
              </div>
              <div className="right">
                <div className="date">
                  <label>Release Date</label>
                  <input
                    type="date"
                    placeholder="Enter Release Date"
                    onChange={releaseDateHandler}
                    value={inputMovieData.releaseDate}
                  />
                </div>
                <div className="ratings">
                  <label>Ratings</label>
                  <input
                    type="number"
                    placeholder="Enter Rating"
                    onChange={ratingHandler}
                    value={inputMovieData.rating}
                  />
                </div>
                <div>
                  <label>Runtime</label>
                  <input
                    type="text"
                    placeholder="Enter Minutes"
                    onChange={runtimeHandler}
                    value={inputMovieData.runtime}
                  />
                </div>
              </div>

              <div className="text-area">
                <label>Overview</label>
                <textarea
                  type="textarea"
                  placeholder="Enter Description"
                  onChange={overviewHandler}
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
