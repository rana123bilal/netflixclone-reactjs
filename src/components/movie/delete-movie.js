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
    setSortedMovieList,
    movieId,
    sortedMovieList,
  } = useContext(DataContext);
  const onCloseDeleteModal = () => setOpenDeleteMovieModal(false);

  const deleteMovieHandler = (id) => {
    setSortedMovieList(sortedMovieList.filter((movie) => movie.id !== id));
    onCloseDeleteModal();
  };

  return (
    <div>
      <Modal
        open={openDeleteMovieModal}
        onClose={onCloseDeleteModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className="deleteMovieModal">
            <h2>Delete Movie</h2>
            <p>Are you sure you want to delete this movie?</p>
            <button
              className="confirm-delete"
              onClick={() => deleteMovieHandler(movieId)}
            >
              Confirm
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
