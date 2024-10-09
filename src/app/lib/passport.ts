// src/lib/passport.ts
import passport from "passport";
import {
  Strategy as SamlStrategy,
  Profile as SamlProfile,
  SamlConfig,
} from "passport-saml";

export interface SamlUserProfile extends SamlProfile {
  nameID: string;
  email?: string;
}

// Serialize and deserialize the user
passport.serializeUser((user: SamlUserProfile, done) => {
  done(null, user);
});

passport.deserializeUser((user: SamlUserProfile, done) => {
  done(null, user);
});

// Configure SAML strategy
const samlOptions: SamlConfig = {
  path: "/api/auth/saml/callback",
  entryPoint: "https://your-idp.com/sso/saml",
  issuer: "your-app-identifier",
  cert: "your-idp-cert",
};

passport.use(
  new SamlStrategy(samlOptions, (profile: any, done: any) => {
    return done(null, profile);
  })
);

export default passport;
