import React from "react";
import Button from "./ButtonStyled";

const ButtonContainer = props => {
  return <Button {...props}>{props.children}</Button>;
};

export default ButtonContainer;
