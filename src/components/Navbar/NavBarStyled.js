import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  box-shadow: 0px 8px 10px 0px rgba(201, 197, 201, 1);
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
`;

const NavLink = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 8px;
  height: 100%;
  color: ${props => props.theme.secondary};
  letter-spacing: 3px;
  font-weight: 100;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.hover};
  }
`;

export { NavBar, NavLink };
