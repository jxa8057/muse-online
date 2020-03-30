import styled from "styled-components";

const Card = styled.div`
  align-self: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  min-height: ${props => {
    if (props.size === "small") return "300px";
    if (props.size === "medium") return "500px";
    if (props.size === "large") return "700px";
  }};
  width: ${props => {
    if (props.size === "small") return "500px";
    if (props.size === "medium") return "700px";
    if (props.size === "large") return "900px";
  }};
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px 1px rgba(0, 0, 0, 0.18);
  z-index: 1;

  h2 {
    text-align: center;
  }
`;

export default Card;
