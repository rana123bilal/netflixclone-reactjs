import { useState } from "react";

const useForm = (submitCallBack) => {
  const [inputData, setInputData] = useState({});

  const validateForm = () => {
    if (Object.values(inputData).length < 7) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      submitCallBack();
      setInputData({});
    }
  };

  const handleChangeInputs = (name) => (event) => {
    event.persist();
    setInputData((inputData) => ({ ...inputData, [name]: event.target.value }));
  };
  return [inputData, handleChangeInputs, handleSubmit];
};

export default useForm;
