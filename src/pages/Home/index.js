import React from "react";
import Page from "../../components/Page";
import { H1, H2 } from "../../components/Headers";

const HomePage = props => {
  const goTo = route => {
    props.history.push(route);
  };

  return (
    <Page>
      <H1>Welcome</H1>
    </Page>
  );
};

export default HomePage;
