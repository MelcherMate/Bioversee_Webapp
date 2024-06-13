import compress from "compression";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import passport from "passport";
import path from "path";
require("./passport");

// * Importing Routes
import actuatorSlidersRoutes from "./routes/actuatorSliders.routes";
import actuatorSwitchesRoutes from "./routes/actuatorSwitches.routes";
import authRoute from "./routes/auth.routes";
import sensorRoutes from "./routes/sensor.routes";

// # DotEnv configuration
// letting it know where to look for the .env file
dotenv.config({ path: path.resolve(__dirname + "./.env") });

// # Server Creation
const app = express();

// # Cookie Session Middleware
app.use(
  cookieSession({
    name: "session",
    keys: ["bioversee"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

// # Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// # Middleware
app.use(cookieParser());
// parse body params and attache them to req.body
app.use(express.urlencoded({ extended: true }));
// To parse the incoming requests with JSON payloads
app.use(express.json());
app.use(compress());
// secure apps by setting various HTTP headers
app.use(helmet());
// # CORS middleware
var corsFrontendSources = process.env.CORS_ALLOWED_ORIGINS;
// var corsOptions = {
//   origin: corsFrontendSources,
//   optionsSuccessStatus: 200, // For legacy browser support
//   methods: "GET,POST,PUT,DELETE",
//   credentials: true,
// };
//app.use(cors(corsOptions));
app.use(
  cors({
    origin: corsFrontendSources,
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// # Routes
app.use("/", actuatorSlidersRoutes, actuatorSwitchesRoutes, sensorRoutes);
app.use("/auth", authRoute);

// # Serving
// serving the frontend dev, and prod folders as static resources

// app.use("/", express.static(path.join(__dirname, "../client/")));
// /* final catch-all route to index.html defined last; trailing / is important (!!!) */
// app.get("/*", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "../client/"));
// });
// app.use("*", function (req, res, next) {
// // serve files upon refresh window
// });

// app.use("/", express.static(path.join(__dirname, "indexReact.html")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "indexReact.html"));
// });

app.use("*", function (req, res, next) {});

export default app;
