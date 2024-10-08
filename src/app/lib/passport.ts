// lib/passport.ts
import passport from "passport";
import { Strategy as SamlStrategy, SamlConfig, Profile } from "passport-saml";

export interface SamlUserProfile extends Profile {
  nameID: string;
  email?: string;
}

passport.serializeUser((user: SamlUserProfile, done) => {
  done(null, user);
});

passport.deserializeUser((user: SamlUserProfile, done) => {
  done(null, user);
});

const samlOptions: SamlConfig = {
  path: "/api/auth/saml/callback", // Your SAML callback URL
  entryPoint: "https://your-idp.com/sso/saml", // IdP entry point
  issuer: "your-app-identifier",
  cert: "your-idp-cert", // IDP public certificate
};

passport.use(
  new SamlStrategy(samlOptions, (profile: SamlUserProfile, done) => {
    return done(null, profile);
  })
);

export default passport;
