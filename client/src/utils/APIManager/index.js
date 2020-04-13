import axios from "axios";

const getSignedUrlForS3 = async () => {
  try {
    const response = await axios.get("/api/s3/getSignedUrl");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export { getSignedUrlForS3 };
