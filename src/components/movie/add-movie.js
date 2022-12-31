import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useRef } from "react";
import "./Movies.css";
import { useFormik } from "formik";
import { useContext } from "react";
import { createMovie } from "../../redux/actions/movie-actions";
import DataContext from "../../context/data-context";
import { useDispatch } from "react-redux";
import MultipleSelect from "./multipleSelect";
import { options } from "../../Constants";

export default function AddMovie() {
  const { toggleMovieModal, setToggleMovieModal } = useContext(DataContext);

  const onValueChange = (value) => {
    return formik.setFieldValue("genres", value);
  };
  const MultipleSelectRef = useRef(null);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      release_date: "",
      poster_path: "",
      rating: "",
      genres: "",
      runtime: 0,
      overview: "",
    },
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      const movieData = {
        title: values.title,
        poster_path: values.poster_path,
        runtime: Number(values.runtime),
        release_date: values.release_date,
        vote_average: values.rating,
        genres: values.genres,
        overview: values.overview,
      };
      dispatch(createMovie(movieData));
      resetForm();
      MultipleSelectRef.current.reset();
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
        open={toggleMovieModal}
        onClose={() => setToggleMovieModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className="addMovieModal">
            <div className="head">
              <h2>ADD MOVIE</h2>
              <CloseIcon
                className="closeicon"
                onClick={() => setToggleMovieModal(false)}
              />
            </div>
            <form onSubmit={formik.handleSubmit} ref={MultipleSelectRef}>
              <div className="left">
                <div className="form-title">
                  <label>TITLE</label>
                  <input
                    name="title"
                    type="text"
                    placeholder="Enter Title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />
                  {formik.errors.title && (
                    <div className="left-error">{formik.errors.title}</div>
                  )}
                </div>
                <div className="URL">
                  <label>MOVIE URL</label>
                  <input
                    name="poster_path"
                    type="text"
                    placeholder="Enter URL"
                    onChange={formik.handleChange}
                    value={formik.values.poster_path}
                  />
                  {formik.errors.poster_path && (
                    <div className="left-error">
                      {formik.errors.poster_path}
                    </div>
                  )}
                </div>
                <div className="genre">
                  <label>GENRE</label>
                  <MultipleSelect
                    name="genres"
                    options={options}
                    className="options"
                    onChange={onValueChange}
                    value={formik.values.genres}
                  />
                  {formik.errors.genres && (
                    <div className="left-error">{formik.errors.genres}</div>
                  )}
                </div>
              </div>
              <div className="right">
                <div className="date">
                  <label>RELEASE DATE</label>
                  <input
                    name="release_date"
                    type="date"
                    placeholder="Enter Release Date"
                    onChange={formik.handleChange}
                    value={formik.values.release_date}
                  />
                  {formik.errors.release_date && (
                    <div className="error">{formik.errors.release_date}</div>
                  )}
                </div>
                <div className="ratings">
                  <label>RATINGS</label>
                  <input
                    name="rating"
                    type="number"
                    placeholder="Enter Rating"
                    onChange={formik.handleChange}
                    value={formik.values.rating}
                  />
                  {formik.errors.rating && (
                    <div className="error">{formik.errors.rating}</div>
                  )}
                </div>
                <div className="runtime">
                  <label>RUNTIME</label>
                  <input
                    name="runtime"
                    type="text"
                    placeholder="Enter Minutes"
                    onChange={formik.handleChange}
                    value={formik.values.runtime}
                  />
                  {formik.errors.runtime && (
                    <div className="error">{formik.errors.runtime}</div>
                  )}
                </div>
              </div>

              <div className="text-area">
                <label>OVERVIEW</label>
                <textarea
                  name="overview"
                  type="textarea"
                  placeholder="Enter Description"
                  onChange={formik.handleChange}
                  value={formik.values.overview}
                />
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
        </Box>
      </Modal>
    </div>
  );
}
