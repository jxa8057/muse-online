import Express from "express";

import { S3Resolvers } from "./../resolvers";

const router = Express.Router();

/** Allow throwing errors from within resolvers without try catch */
const catchErrors = (func) => {
  return (req, res, next) => {
    try {
      func(req, res);
    } catch (error) {
      next(error);
    }
  };
};

/** S3 RESOLVERS */
const { getPresignedGETUrl, getPresignedPUTUrl } = S3Resolvers;
router.get("/s3/getPresignedGETUrl", catchErrors(getPresignedGETUrl));
router.get("/s3/getPresignedPUTUrl", catchErrors(getPresignedPUTUrl));

export default router;
