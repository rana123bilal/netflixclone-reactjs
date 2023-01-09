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
import { validateMovieData } from "../../utils/validation/form/form-validation";

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
      genres: movie.genres,
      runtime: movie.runtime,
      overview: movie.overview,
    },
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: (values) => {
      const movieData = {
        id: movieId,
        title: values.title,
        poster_path: values.poster_path,
        runtime: values.runtime,
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
      return validateMovieData(values);
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
                    value={formik.values.title || ""}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.title && (
                    <div className="left-error">{formik.errors.title}</div>
                  )}
                </div>
                <div className="URL">
                  <label>Movie URL</label>
                  <input
                    name="poster_path"
                    type="text"
                    placeholder="Enter URL"
                    onChange={formik.handleChange}
                    value={formik.values.poster_path || ""}
                  />
                  {formik.errors.poster_path && (
                    <div className="left-error">
                      {formik.errors.poster_path}
                    </div>
                  )}
                </div>
                <div className="genre">
                  <label>Genre</label>
                  <MultipleSelect
                    name="genres"
                    options={options}
                    className="options"
                    onChange={onValueChange}
                    value={formik.values.genres?.toString() || ""}
                  />
                  {formik.errors.genres && (
                    <div className="left-error">{formik.errors.genres}</div>
                  )}
                </div>
              </div>
              <div className="right">
                <div className="date">
                  <label>Release Date</label>
                  <input
                    name="release_date"
                    type="date"
                    placeholder="Enter Release Date"
                    value={formik.values.release_date || ""}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.release_date && (
                    <div className="error">{formik.errors.release_date}</div>
                  )}
                </div>
                <div className="ratings">
                  <label>Ratings</label>
                  <input
                    name="rating"
                    type="number"
                    placeholder="Enter Rating"
                    value={formik.values.rating || ""}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.rating && (
                    <div className="error">{formik.errors.rating}</div>
                  )}
                </div>
                <div className="runtime">
                  <label>Runtime</label>
                  <input
                    type="number"
                    name="runtime"
                    placeholder="Enter Minutes"
                    value={formik.values.runtime || ""}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.runtime && (
                    <div className="error">{formik.errors.runtime}</div>
                  )}
                </div>
              </div>

              <div className="text-area">
                <label>Overview</label>
                <textarea
                  name="overview"
                  type="textarea"
                  placeholder="Enter Description"
                  value={formik.values.overview || ""}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="buttons">
                <button
                  type="reset"
                  className="reset"
                  onClick={formik.resetForm}
                >
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
