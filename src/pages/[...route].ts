import { NextApiHandler } from "next";
import { NextApiRequest, NextApiResponse} from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";
import { configs } from "../constants";

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  return httpProxyMiddleware(req, res, {
    target: configs.url,
  });
};

export default handler;