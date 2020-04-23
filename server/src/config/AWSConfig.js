import AWS from "aws-sdk";

const credentials = {
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_S3_ACCESS_KEY_SECRET,
};
const region = process.env.AWS_S3_REGION;

AWS.config.update({ credentials, region });

export default AWS;
