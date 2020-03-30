import React from "react";
import { NavBar, NavLink } from "./NavBarStyled";

const NavBarContainer = () => {
  return (
    <NavBar>
      <NavLink to={"/log-in"}>Log In</NavLink>
      <NavLink to={"/sign-up"}>Sign Up</NavLink>
    </NavBar>
  );
};

export default NavBarContainer;
