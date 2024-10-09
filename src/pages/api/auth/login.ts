// pages/api/auth/login.ts
import { createRouter } from "next-connect"; // Correct import
import passport from "../../../../src/auth/passport"; // Adjust the path to your passport config

const router = createRouter();

// Define the GET route for login
router.get(passport.authenticate("saml", { failureRedirect: "/" }));

// Export the router as the default export
export default router.handler();
