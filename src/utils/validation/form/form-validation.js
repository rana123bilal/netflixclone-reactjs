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
