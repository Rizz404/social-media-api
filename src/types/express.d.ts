import { ParamsDictionary, Request } from "express-serve-static-core";

interface ReqParams extends ParamsDictionary {
  userId: string;
  postId: string;
  tagId: string;
  commentId: string;
  parentId: string;
}

interface RequestWithUpload extends Request {
  fileUploadError?: Error;
  fileUrl?: string;
  fileUrls?: string[];
}