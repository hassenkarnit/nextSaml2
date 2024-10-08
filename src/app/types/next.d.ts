// types/next.d.ts
import { SessionData } from "express-session";
import { SamlUserProfile } from "../lib/passport";
import { NextApiRequest } from "next";

declare module "next" {
  interface NextApiRequest {
    session: SessionData;
    user?: SamlUserProfile;
  }
}
