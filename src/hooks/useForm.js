import { useState } from "react";

// Automatically updates fields when used in a form
const useForm = (callback) => {
  const [state, setState] = useState({});

  const handleChange = (name, newValue) => {
    setState((values) => ({
      ...values,
      [name]: newValue
    }));
  };

  const handleSubmit = () => {
    callback(state);
  };

  return { handleChange, handleSubmit, state };
};

export default useForm;
