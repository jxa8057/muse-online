import React, { useEffect, useContext } from "react";
import { FirebaseContext } from "./../../config/firebase";
import { Page, Headers } from "../../components";
const { H1 } = Headers;

const HomePage = (props) => {
  const firebase = useContext(FirebaseContext);
  const { currentUser } = firebase.auth;

  useEffect(() => {
    console.log(currentUser);
  });

  return (
    <Page>
      {currentUser ? (
        <H1>Welcome, {currentUser.email}</H1>
      ) : (
        <H1>Welcome, please log in or sign up</H1>
      )}
    </Page>
  );
};

export default HomePage;
