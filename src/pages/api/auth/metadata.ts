import type { NextApiRequest, NextApiResponse } from "next";
import { Strategy as SamlStrategy } from "passport-saml";
import passport from "../../../auth/passport";

const strategy = passport._strategy("saml") as SamlStrategy;

const metaData = async (req: NextApiRequest, res: NextApiResponse) => {
  const metadata = strategy.generateServiceProviderMetadata(
    "PRIVATE_KEY",
    "CERTIFICATE"
  );
  res.setHeader("Content-Type", "application/xml");
  res.send(metadata);
};

export default metaData;
