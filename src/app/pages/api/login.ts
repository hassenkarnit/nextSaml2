// pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import passport from "../../lib/passport";
import { promisify } from "util";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const authenticate = promisify(
    passport.authenticate("saml", { failureRedirect: "/", failureFlash: true })
  );
  await authenticate(req, res);
}
