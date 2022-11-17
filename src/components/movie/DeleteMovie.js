import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Movies.css'


export default function DeleteMovie({openDeleteMovieModal, setOpenDeleteMovieModal}) {
  const handleClose = () => setOpenDeleteMovieModal(false);

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
          <button type="submit" className="confirm-delete">
              Confirm
            </button>
        </div>
        </Box>
      </Modal>
    </div>
  );
}
