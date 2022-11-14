import React from "react";
import "./AddMovie.css";

function AddMovies({ openAddMovieModal }) {
  return (
    <div>
      {openAddMovieModal  && (
        <div className="addMovieModal">
          <h2>Add Movie</h2>
          <form>
            <div className="left">
              <div className="form-title">
                <label>Title</label>
                <input type="text" placeholder="Enter Title" />
              </div>
              <div className="URL">
                <label>Movie URL</label>
                <input type="text" placeholder="Enter URL" />
              </div>
              <div>
                <label>Genre</label>
                <select className="options">
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
                <input type="date" placeholder="Enter Release Date" />
              </div>
              <div className="ratings">
                <label>Ratings</label>
                <input type="number" placeholder="Enter Rating" />
              </div>
              <div>
                <label>Runtime</label>
                <input type="text" placeholder="Enter Minutes" />
              </div>
            </div>

            <div className="text-area">
              <label>Overview</label>
              <textarea type="textarea" placeholder="Enter Description" />
            </div>
            <div className="buttons">
            <button type="reset" className="reset">
              RESET
            </button>
            <button type="submit" className="submit">
              SUBMIT
            </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddMovies;
