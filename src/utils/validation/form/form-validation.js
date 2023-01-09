const isFormValid = (formData) => {
  return (
    Object.keys(formData).filter((key) => {
      return formData[key] && !!formData[key].errorMessage;
    }).length === 0
  );
};

const generateFormErrors = (formData, errorMap) => {
  const newFormData = { ...formData };
  for (let key in newFormData) {
    if (
      newFormData[key] !== null &&
      typeof newFormData[key] === "object" &&
      !newFormData[key].errorMessage &&
      !newFormData[key].value &&
      (newFormData[key].isRequired === undefined || newFormData[key].isRequired)
    ) {
      newFormData[key].errorMessage = errorMap[key];
      newFormData[key].hasError = true;
    }
  }

  return newFormData;
};

export const validateForm = (formData, errorMap) => {
  const newFormData = generateFormErrors(formData, errorMap);
  return {
    newFormData,
    isFormValid: isFormValid(newFormData),
  };
};

export const validateMovieData = (values) => {
  const errors = {};
  const REQUIRED = "Required";
  for (let key in values) {
    if (values[key].length === 0 || values[key] < 0) {
      errors[key] = REQUIRED;
    }
  }
  if (!validateURL(values.poster_path)) {
    errors.poster_path = "Please enter a valid URL";
  }
  if (values.rating < -1) {
    errors.rating = "Ratings Must be Larger or equal to 0";
  }
  if (values.runtime < -1) {
    errors.runtime = "Runtime Must be Larger or equal to 0";
  }
  return errors;
};

export const validateURL = (url) => {
  var expression =
    // eslint-disable-next-line no-useless-escape
    /^https?:\/\/?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  var regex = new RegExp(expression);
  return regex.test(url);
};
