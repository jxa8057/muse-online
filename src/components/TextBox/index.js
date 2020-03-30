import React from "react";
import TextBox from "./TextBoxStyled";
import ErrorMessage from "../ErrorMessage/ErrorMessageStyled";

const TextBoxContainer = ({ errorMessage, ...otherProps }) => {
  return (
    <>
      <TextBox {...otherProps} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};

export default TextBoxContainer;
