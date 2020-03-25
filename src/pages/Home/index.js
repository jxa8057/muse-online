import React from "react";
import Page from "../../components/global/Page";
import { H1, H2 } from "../../components/global/Headers";

const HomePage = props => {
  const goTo = route => {
    props.history.push(route);
  };

  return (
    <Page>
      <H1>Welcome</H1>
      <H2 onClick={() => goTo("/log-in")}>Log In</H2>
      <H2 onClick={() => goTo("/sign-up")}>Sign Up</H2>
    </Page>
  );
};

export default HomePage;
