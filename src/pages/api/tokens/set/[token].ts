import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { sucess: boolean }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { token } = req.query

  if (!token) {
    res.status(400).json({ sucess: false })
  }
  const cookieAttributes = [
    `Path=/`,
    `Max-Age=3600`,
    `HttpOnly`,
    `Secure`,
    `SameSite=Strict`
  ];
  const cookieHeader = cookieAttributes.join('; ');

  res.setHeader('Set-Cookie', `auth=${token}; ${cookieHeader}`);

  res.status(200).json({ sucess: true })
}
