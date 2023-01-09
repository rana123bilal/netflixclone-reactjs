import { useState } from "react";
import { validateForm } from "../utils/validation/form/form-validation";

const useForm = (submitCallBack) => {
  const initialState = {
    title: { value: "", errorMessage: "", hasError: false },
    release_date: { value: "", errorMessage: "", hasError: false },
    poster_path: { value: "", errorMessage: "", hasError: false },
    rating: { value: "", errorMessage: "", hasError: false },
    genres: { value: "", errorMessage: "", hasError: false },
    runtime: { value: "", errorMessage: "", hasError: false },
    overview: { value: "", errorMessage: "", hasError: false },
  };

  const [formData, setFormData] = useState(initialState);

  const errorMap = {
    title: "Title is required",
    release_date: "Release date is required",
    poster_path: "Movie url is required",
    rating: "Rating is required",
    genres: "genres is required",
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
