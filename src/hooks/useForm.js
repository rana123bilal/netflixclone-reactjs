import { useState } from "react";
import { validateForm } from "../utils/validation/form/form-validation";

const useForm = (submitCallBack) => {
  const initialState = {
    title: { value: "", errorMessage: "", hasError: false },
    releaseDate: { value: "", errorMessage: "", hasError: false },
    movieURL: { value: "", errorMessage: "", hasError: false },
    rating: { value: "", errorMessage: "", hasError: false },
    genre: { value: "", errorMessage: "", hasError: false },
    runtime: { value: "", errorMessage: "", hasError: false },
    overview: { value: "", errorMessage: "", hasError: false },
  };

  const [formData, setFormData] = useState(initialState);

  const errorMap = {
    title: "Title is required",
    releaseDate: "Release date is required",
    movieURL: "Movie url is required",
    rating: "Rating is required",
    genre: "Genre is required",
    runtime: "Runtime is required",
    overview: "Overview is required",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { isFormValid } = validateForm(formData, errorMap);
    if (isFormValid) {
      submitCallBack();
      setFormData(initialState);
    }
  };

  const handleChangeInputs = (name) => (event) => {
    event.persist();
    setFormData((formData) => ({
      ...formData,
      [name]: { value: event.target.value },
    }));
  };
  return [formData, handleChangeInputs, handleSubmit];
};

export default useForm;
