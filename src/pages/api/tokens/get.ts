// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = string | null;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // this will return `auth=${token}` || undefined
  const cookie = req.headers.cookie;
  res.status(200).json(cookie ? cookie.split("=")[1] : null);
}
