const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "1092956765782-nivmn9pnugk6224vunqu2ij2hcqm8ttt.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
