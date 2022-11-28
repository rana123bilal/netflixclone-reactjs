import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Movies.css";
import { DUMMY_DATA } from "../data";
import { useContext } from "react";
import DataContext from "../../context/data-context";
import useForm from '../../utils/useForm';

export default function AddMovie() {
  const { toggleMovieModal, setToggleMovieModal, setSortedMovieList, sortedMovieList } = useContext(DataContext);

  const [inputData, handleChangeInputs, handleSubmit] = useForm(addMovieHandler)

  function addMovieHandler() {
    const { title, releaseDate, movieURL, rating, genre, runtime, overview } = inputData;
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
            <form onSubmit={handleSubmit}>
              <div className="left">
                <div className="form-title">
                  <label>TITLE</label>
                  <input
                    type="text"
                    placeholder="Enter Title"
                    onChange={handleChangeInputs('title')}
                    value={inputData.title || ''}
                  />
                </div>
                <div className="URL">
                  <label>MOVIE URL</label>
                  <input
                    type="text"
                    placeholder="Enter URL"
                    onChange={handleChangeInputs('movieURL')}
                    value={inputData.movieURL || ''}
                  />
                </div>
                <div className="genre">
                  <label>GENRE</label>
                  <select
                    className="options"
                    onChange={handleChangeInputs('genre')}
                    value={inputData.genre || ''}
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
                    onChange={handleChangeInputs('releaseDate')}
                    value={inputData.releaseDate || ''}
                  />
                </div>
                <div className="ratings">
                  <label>RATINGS</label>
                  <input
                    type="number"
                    placeholder="Enter Rating"
                    onChange={handleChangeInputs('rating')}
                    value={inputData.rating || ''}
                  />
                </div>
                <div className="runtime">
                  <label>RUNTIME</label>
                  <input
                    type="text"
                    placeholder="Enter Minutes"
                    onChange={handleChangeInputs('runtime')}
                    value={inputData.runtime || ''}
                  />
                </div>
              </div>

              <div className="text-area">
                <label>OVERVIEW</label>
                <textarea
                  type="textarea"
                  placeholder="Enter Description"
                  onChange={handleChangeInputs('overview')}
                  value={inputData.overview || ''}
                />
              </div>
              <div className="buttons">
                <button type="reset" className="reset">
                  RESET
                </button>
                <button
                  type="submit"
                  className="submit"
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
