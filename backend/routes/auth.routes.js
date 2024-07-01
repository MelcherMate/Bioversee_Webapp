const router = require("express").Router();
const passport = require("passport");
const dotenv = require("dotenv");
const path = require("path");

// # DotEnv configuration
// Letting it know where to look for the .env file
if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: path.resolve(__dirname, "../.env.dev") });
} else {
  dotenv.config({ path: path.resolve(__dirname, "../.env.prod") });
}

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CORS_ALLOWED_ORIGINS);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    // successRedirect: process.env.PUBLIC_URL + "/dashboard",
    successRedirect: "/login/success",
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
