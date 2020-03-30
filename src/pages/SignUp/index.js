import React, { useContext } from "react";
import { FirebaseContext } from "./../../config/firebase";
import Page from "./../../components/Page";
import Card from "./../../components/Card";
import TextBox from "./../../components/TextBox";
import { H2 } from "./../../components/Headers";

const SignUp = () => {
  const firebase = useContext(FirebaseContext);

  const submit = () => {};

  return (
    <Page>
      <Card>
        <H2>Sign Up</H2>
        <TextBox />
      </Card>
    </Page>
  );
};

export default SignUp;
