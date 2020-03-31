import React from "react";
import { Link } from "react-router-dom";
import { NavBar, NavLink } from "./NavBarStyled";
import SignOutButton from "./SignOutButton";

const NavBarContainer = props => {
  return (
    <NavBar>
      <NavLink as={Link} to={"/"}>
        Home
      </NavLink>
      <NavLink as={Link} to={"/log-in"}>
        Log In
      </NavLink>
      <NavLink as={Link} to={"/sign-up"}>
        Sign Up
      </NavLink>
      <SignOutButton history={props.history} />
    </NavBar>
  );
};

export default NavBarContainer;
