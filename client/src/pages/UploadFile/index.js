import React from "react";
import { testRoute } from "./../../utils/APIManager";
import { Page, Headers, Button } from "../../components";
const { H2 } = Headers;

const UploadFile = (props) => {
  return (
    <Page>
      <H2>Upload File</H2>
      <Button onClick={testRoute}>Test</Button>
    </Page>
  );
};

export default UploadFile;
