import { createRouter } from "next-connect"; // Correct import
import { NextApiRequest, NextApiResponse } from "next";
import session from "express-session";
import passport from "../../../src/auth/passport";

const handler = createRouter<NextApiRequest, NextApiResponse>();

handler.use(
  session({
    secret: "your-session-secret", // Use a secure secret in production
    resave: false,
    saveUninitialized: true,
  })
);

handler.use(passport.initialize());
handler.use(passport.session());

export default handler;
