import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";

// # DotEnv configuration
// letting it know where to look for the .env file
dotenv.config({ path: path.resolve(__dirname + "./.env") });

// # Server Creation
const app = express();

// # Middleware
// these middlewares add/remove/alter the incoming data packages
// CORS middleware
var corsFrontendSources = process.env.CORS_ALLOWED_ORIGINS;
var corsOptions = {
  origin: corsFrontendSources,
  // credentials: true,
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));

// # Serving
// serving the frontend dev, and prod folders as static resources

app.use("/", express.static(path.join(__dirname, "../client/")));
/* final catch-all route to index.html defined last; trailing / is important (!!!) */
app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../client/"));
});
app.use("*", function (req, res, next) {
  // serve files upon refresh window
});

export default app;
