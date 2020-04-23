import axios from "axios";

/**
 * getSignedUrlForS3
 * @param {object} params
 * @param {Array<string>} params.folders - The folder structure required to get to the file (ie: [music, group, album])
 * @param {string} params.fileName - The name of the file to be fetched
 * @param {string} params.userName - The username where the file is stored
 */
const getPresignedGETUrlForS3 = async (params) => {
  try {
    const { data } = await axios.get("/api/s3/getPresignedGETUrl", {
      params,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default { getPresignedGETUrlForS3 };
