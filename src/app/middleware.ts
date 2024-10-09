// src/app/middleware.ts
import { NextRequest, NextResponse } from "next/server";
import session from "express-session";

// Simple memory store for dev purposes
const sessionMiddleware = session({
  secret: "your-secret",
  resave: false,
  saveUninitialized: true,
});

export async function middleware(req: NextRequest) {
  await new Promise((resolve) =>
    sessionMiddleware(req as any, {} as any, resolve)
  );
  return NextResponse.next();
}
