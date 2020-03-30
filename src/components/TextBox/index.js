import React from "react";
import { TextBox, TextBoxWrapper, ErrorMessage } from "./TextBoxStyled";

const TextBoxContainer = ({ errorMessage, ...otherProps }) => {
  return (
    <TextBoxWrapper>
      <TextBox {...otherProps} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </TextBoxWrapper>
  );
};

export default TextBoxContainer;
