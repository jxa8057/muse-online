import { AWS } from "./../config";

const getPresignedGETUrl = (req, res) => {
  const s3 = new AWS.S3();
  const { userName, folders = [], fileName } = req.body;
  const bucketName = process.env.AWS_S3_BUCKET_NAME;

  const folderPath = folders.map((folderName) => `/${folderName}`).join("");

  const keyName = `user-uploads/${userName}${folderPath}${
    fileName ? `/${fileName}` : ""
  }`;

  const signedUrl = s3.getSignedUrl("getObject", {
    Bucket: bucketName,
    Key: keyName,
    Expires: 12, // seconds
  });

  res.json({ signedUrl });
};

const getPresignedPUTUrl = (req, res) => {
  const s3 = new AWS.S3();
  const { userName, folders, fileName } = req.body;
  const bucketName = process.env.AWS_S3_BUCKET_NAME;

  const folderPath = folders.map((folderName) => `/${folderName}`).join("");

  const keyName = `user-uploads/${userName}${folderPath}/${fileName}`;

  const signedUrl = s3.getSignedUrl("putObject", {
    Bucket: bucketName,
    Key: keyName,
    Expires: 12, // seconds
  });

  res.json({ signedUrl });
};

export default { getPresignedGETUrl, getPresignedPUTUrl };
