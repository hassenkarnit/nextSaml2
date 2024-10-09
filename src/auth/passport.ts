import { Strategy as SamlStrategy } from "passport-saml";
import passport from "passport";
import fs from "fs";
import path from "path";

passport.serializeUser((user, done: any) => {
  done(null, user);
});

passport.deserializeUser((user: any, done: any) => {
  done(null, user);
});

// Define the path to the certificate file
const certPath = path.resolve(
  process.cwd(),
  "src/certificates/SCImetadata4.xml"
); // Adjust the path as needed

// Read the certificate
const cert = fs.readFileSync(certPath, "utf8");

passport.use(
  new SamlStrategy(
    {
      path: "/auth/saml/callback",
      entryPoint:
        "https://a2chpflie.accounts.ondemand.com/saml2/idp/sso/a2chpflie.accounts.ondemand.com",
      issuer: "https://localhost:44399/",
      cert: cert, // The certificate from the IDP
    },
    (profile: any, done: any) => {
      return done(null, profile);
    }
  )
);

export default passport;
