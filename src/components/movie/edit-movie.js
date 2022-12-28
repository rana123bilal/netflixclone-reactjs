import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./Movies.css";
import { options } from "../../Constants";
import { useContext } from "react";
import { useFormik } from "formik";
import {
  fetchMovieList,
  getMovieById,
} from "../../redux/actions/movie-actions";
import { editMovie } from "../../redux/actions/movie-actions";
import MultipleSelect from "./multipleSelect";
import DataContext from "../../context/data-context";
import { useDispatch, useSelector } from "react-redux";

export default function EditMovie() {
  const { openEditMovieModal, setOpenEditMovieModal, movieId } =
    useContext(DataContext);

  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movieDetails);
  const { movie } = movieDetails;

  useEffect(() => {
    if (movieId) {
      dispatch(getMovieById(movieId));
    }
  }, [movieId, dispatch]);

  const onValueChange = (value) => {
    return formik.setFieldValue("genres", value);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      rating: movie.vote_average,
      genres: movie.genres?.join(" "),
      runtime: movie.runtime,
      overview: movie.overview,
    },
    onSubmit: (values) => {
      const movieData = {
        id: movieId,
        title: values.title,
        poster_path: values.poster_path,
        runtime: Number(values.runtime),
        release_date: values.release_date,
        vote_average: values.rating,
        genres: values.genres,
        overview: values.overview,
      };
      dispatch(editMovie(movieData));
      dispatch(fetchMovieList());
      setOpenEditMovieModal(false);
    },
    validate: (values) => {
      const errors = {};

      if (!values.title) {
        errors.title = "Required";
      }
      if (!values.release_date) {
        errors.release_date = "Required";
      }
      if (!values.poster_path) {
        errors.poster_path = "Required";
      }
      if (!values.rating) {
        errors.rating = "Required";
      }
      if (!values.genres) {
        errors.genres = "Required";
      }
      if (!values.runtime) {
        errors.runtime = "Required";
      }
      if (!values.overview) {
        errors.overview = "Required";
      }
      return errors;
    },
  });

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
              <CloseIcon
                className="closeicon"
                onClick={() => setOpenEditMovieModal(false)}
              />
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="left">
                <div className="form-title">
                  <label>Title</label>
                  <input
                    name="title"
                    type="text"
                    placeholder="Enter Title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="URL">
                  <label>Movie URL</label>
                  <input
                    name="poster_path"
                    type="text"
                    placeholder="Enter URL"
                    onChange={formik.handleChange}
                    value={formik.values.poster_path}
                  />
                </div>
                <div className="genre">
                  <label>Genre</label>
                  <MultipleSelect
                    name="genres"
                    options={options}
                    className="options"
                    onChange={onValueChange}
                    value={formik.values.genres}
                  />
                </div>
              </div>
              <div className="right">
                <div className="date">
                  <label>Release Date</label>
                  <input
                    name="release_date"
                    type="date"
                    placeholder="Enter Release Date"
                    value={formik.values.release_date}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="ratings">
                  <label>Ratings</label>
                  <input
                    name="rating"
                    type="number"
                    placeholder="Enter Rating"
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="runtime">
                  <label>Runtime</label>
                  <input
                    type="text"
                    name="runtime"
                    placeholder="Enter Minutes"
                    value={formik.values.runtime}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>

              <div className="text-area">
                <label>Overview</label>
                <textarea
                  name="overview"
                  type="textarea"
                  placeholder="Enter Description"
                  value={formik.values.overview}
                  onChange={formik.handleChange}
                />
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
