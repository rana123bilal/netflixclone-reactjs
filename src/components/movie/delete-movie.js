import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Movies.css";
import { useContext } from "react";
import DataContext from "../../context/data-context";

export default function DeleteMovie() {
  const {
    openDeleteMovieModal,
    setOpenDeleteMovieModal,
    setSortedList,
    movieId,
    sortedList
  } = useContext(DataContext)
  const handleClose = () => setOpenDeleteMovieModal(false);

  const deleteHandler = (id) => {
    setSortedList(sortedList.filter((movie) => movie.id !== id));
    handleClose()
  };

  return (
    <div>
      <Modal
        open={openDeleteMovieModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className="deleteMovieModal">
            <h2>Delete Movie</h2>
            <p>Are you sure you want to delete this movie?</p>
            <button
              className="confirm-delete"
              onClick={() => deleteHandler(movieId)}
            >
              Confirm
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
