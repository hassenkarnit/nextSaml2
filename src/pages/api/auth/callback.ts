import handler from "../auth";
import passport from "../../../auth/passport";

handler.post(
  passport.authenticate("saml", {
    failureRedirect: "/",
    successRedirect: "/dashboard",
  })
);

export default handler;
