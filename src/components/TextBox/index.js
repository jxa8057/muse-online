import React from "react";
import TextBox from "./TextBoxStyled";

const TextBoxContainer = props => {
  const { placeholder } = props;
  return <TextBox placeholder={placeholder} />;
};

export default TextBoxContainer;
