import { useState } from "react";

// Automatically updates fields when used in a form
const useForm = (callback) => {
  const [state, setState] = useState({});

  const handleChange = (name, newValue) => {
    setState({
      ...state,
      [name]: newValue
    });
  };

  const addImage = (image) => {
    setState({ ...state, image });
  };

  const clearForm = () => {
    setState({});
  };

  const handleSubmit = () => {
    callback(state);
    clearForm();
  };

  return { handleChange, handleSubmit, addImage, clearForm, state };
};

export default useForm;
