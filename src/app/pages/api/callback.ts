// pages/api/auth/callback.ts
import { NextApiRequest, NextApiResponse } from "next";
import passport from "../../lib/passport";
import { SamlUserProfile } from "../../lib/passport";

export default async function handler(
  req: NextApiRequest & { user?: SamlUserProfile },
  res: NextApiResponse
): Promise<void> {
  passport.authenticate(
    "saml",
    { failureRedirect: "/" },
    (err: Error | null, user?: SamlUserProfile) => {
      if (err || !user) {
        return res.redirect("/");
      }

      req.login(user, (loginErr: Error) => {
        if (loginErr) {
          return res.redirect("/");
        }

        return res.redirect("/dashboard"); // Redirect to dashboard after successful login
      });
    }
  )(req, res);
}
