import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Movies.css";
import { useContext } from "react";
import DataContext from "../../context/data-context";

export default function EditMovie() {
  const { openEditMovieModal, setOpenEditMovieModal } = useContext(DataContext);
  return (
    <div>
      <Modal
        open={openEditMovieModal}
        onClose={() => setOpenEditMovieModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className="addMovieModal">
          <div className="head">
            <h2>Edit Movie</h2>
            <CloseIcon className="closeicon" onClick={() => setOpenEditMovieModal(false)}/>
            </div>
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
                <div className="genre">
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
                <div className="runtime">
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
                  Edit
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
