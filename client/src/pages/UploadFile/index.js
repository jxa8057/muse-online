import React, { useState } from "react";
import { S3APIManager } from "./../../utils/APIManager";
import { Page, Headers, TextBox, Button, Select } from "../../components";
const { H2, H3 } = Headers;

const UploadFile = (props) => {
  const [fileName, setFileName] = useState("");
  const [signedUrl, setSignedUrl] = useState("");
  // const [fileType, setFileType] = useState("");

  const handleChangeFileName = (e) => {
    setFileName(e.target.value);
  };

  const handleGetSignedUrlForS3 = async () => {
    const folders = [];
    const userName = "jxa8057";
    const signedUrl = await S3APIManager.getPresignedGETUrlForS3({
      userName,
      folders,
      fileName,
    });
    console.log("signedUrl", signedUrl);
    setSignedUrl(signedUrl);
  };

  return (
    <Page>
      <H2>Upload File</H2>
      <H3>Choose File Name:</H3>
      <TextBox
        value={fileName}
        onChange={handleChangeFileName}
        placeholder="Choose a file name"
        errorMessage="Please enter a name for the file you would like to upload"
      />
      <Button onClick={handleGetSignedUrlForS3}>Get url</Button>
      <span>{signedUrl}</span>
      {/* <H3>Choose a file type to upload: </H3>
      <Select onChange={(e) => setFileType(e.target.value)}>
        <option value="" hidden>
          Choose one
        </option>
        <option value="image">Image</option>
        <option value="audio">Audio</option>
      </Select> */}
    </Page>
  );
};

export default UploadFile;
