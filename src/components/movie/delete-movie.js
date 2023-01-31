import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./movies-1.css";
import { useContext } from "react";
import DataContext from "../../context/data-context";
import { useDispatch } from "react-redux";
import { deleteMovie, fetchMovieList } from "../../redux/actions/movie-actions";

export default function DeleteMovie() {
  const { openDeleteMovieModal, setOpenDeleteMovieModal, movieId } =
    useContext(DataContext);

  const dispatch = useDispatch();

  const deleteMovieHandler = (id) => {
    dispatch(deleteMovie(id));
    setOpenDeleteMovieModal(false);
    dispatch(fetchMovieList());
  };

  return (
    <div>
      <Modal
        open={openDeleteMovieModal}
        onClose={() => setOpenDeleteMovieModal(false)}
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
