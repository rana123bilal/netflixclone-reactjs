import React, { useCallback, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useRef } from "react";
import "./Movies.css";
import { useFormik } from "formik";
import { useContext } from "react";
import {
  createMovie,
  resetCreateMovieState,
} from "../../redux/actions/movie-actions";
import DataContext from "../../context/data-context";
import { useDispatch, useSelector } from "react-redux";
import MultipleSelect from "./multipleSelect";
import { options } from "../../Constants";
import { movieDataValidations } from "../../utils/validation/form/form-validation";

export default function AddMovie() {
  const { toggleMovieModal, setToggleMovieModal } = useContext(DataContext);
  const { success } = useSelector((state) => {
    return state.movieCreateDetail;
  });
  const onValueChange = useCallback((value) => {
    return formik.setFieldValue("genres", value);
  }, []);

  const multipleSelectRef = useRef(null);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      release_date: "",
      poster_path: "",
      rating: "",
      genres: "",
      runtime: "",
      overview: "",
    },
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: (values) => {
      const movieData = {
        title: values.title,
        poster_path: values.poster_path,
        runtime: values.runtime,
        release_date: values.release_date,
        vote_average: values.rating,
        genres: values.genres,
        overview: values.overview,
      };
      dispatch(createMovie(movieData));
      console.log(movieData);
    },
    validate: (values) => {
      return movieDataValidations(values);
    },
  });
  useEffect(() => {
    if (success) {
      formik.resetForm();
      dispatch(resetCreateMovieState());
    }
  }, [success, dispatch]);

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
            <form onSubmit={formik.handleSubmit} ref={multipleSelectRef}>
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
                    success={success}
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
                    type="number"
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
                <button
                  type="reset"
                  className="reset"
                  onClick={() => formik.resetForm()}
                >
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
