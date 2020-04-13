import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "./../../config/firebase";
import { NavBar, NavLink } from "./NavBarStyled";
import SignOutButton from "./SignOutButton";

const NavBarContainer = (props) => {
  const firebase = useContext(FirebaseContext);
  const { currentUser } = firebase.auth;

  const authorizedNav = (
    <NavBar>
      <NavLink as={Link} to={"/"}>
        Home
      </NavLink>
      <NavLink as={Link} to={"/upload-file"}>
        Upload
      </NavLink>
      <SignOutButton history={props.history} />
    </NavBar>
  );

  const unauthorizedNav = (
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
    </NavBar>
  );

  if (!currentUser) return unauthorizedNav;
  return authorizedNav;
};

export default NavBarContainer;
