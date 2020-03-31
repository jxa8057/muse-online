import React, { useContext } from "react";
import { FirebaseContext } from "../../config/firebase";
import { NavLink } from "./NavBarStyled";

const SignOutButton = props => {
  const firebase = useContext(FirebaseContext);

  const signOut = async () => {
    try {
      await firebase.signOut();
      props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return <NavLink onClick={signOut}>Sign Out</NavLink>;
};

export default SignOutButton;
