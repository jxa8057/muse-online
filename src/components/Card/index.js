import React from "react";
import Card from "./CardStyled";

const CardContainer = props => {
  return <Card>{props.children}</Card>;
};

export default CardContainer;
