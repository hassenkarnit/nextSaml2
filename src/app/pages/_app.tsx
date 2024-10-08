// pages/_app.tsx
import type { AppProps } from "next/app";
import { useEffect } from "react";
import session from "express-session";
import passport from "../lib/passport";
import { NextApiRequest, NextApiResponse } from "next";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// Middleware function
export function middleware(
  req: NextApiRequest & { session?: any },
  res: NextApiResponse,
  next: (err?: any) => void
) {
  session({
    secret: "your-secret",
    resave: false,
    saveUninitialized: true,
  })(req, res, next);
}
