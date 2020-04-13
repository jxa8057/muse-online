import React, { useState } from "react";
import { getSignedUrlForS3 } from "./../../utils/APIManager";
import { Page, Headers, Button, Select } from "../../components";
const { H2, H3 } = Headers;

const UploadFile = (props) => {
  const [fileType, setFileType] = useState("");

  return (
    <Page>
      <H2>Upload File</H2>
      <H3>Choose a file type to upload: </H3>
      <Select onChange={(e) => setFileType(e.target.value)}>
        <option value="" hidden>
          Choose one
        </option>
        <option value="image">Image</option>
        <option value="audio">Audio</option>
      </Select>
    </Page>
  );
};

export default UploadFile;
