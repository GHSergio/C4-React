import { useState } from "react";
import { FormContext } from "./FormContext";

export const FormProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return (
    //讓Provider 存取 state & handler(可更新state) 並傳遞
    <FormContext.Provider
      value={{ formValues, setFormValues, handleInputChange }}
    >
      {children}
    </FormContext.Provider>
  );
};
