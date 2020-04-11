import styled from "styled-components";

const TextBoxWrapper = styled.div`
  margin-bottom: 16px;
`;

const TextBox = styled.input`
  box-shadow: 0px 0px 3px 1px rgba(201, 197, 201, 1);
  border: none;
  border-radius: 2px;
  width: 100%;
  padding: 8px;
  font-size: 18px;
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.error};
`;

export { TextBoxWrapper, TextBox, ErrorMessage };
