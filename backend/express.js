import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import compress from "compression";
import helmet from "helmet";
import express from "express";
import path from "path";
// * Importing Routes
import actuatorRoutes from './routes/actuator.routes';

// # DotEnv configuration
// letting it know where to look for the .env file
dotenv.config({ path: path.resolve(__dirname + "./.env") });

// # Server Creation
const app = express();

// # Middleware
app.use(cookieParser());
// parse body params and attache them to req.body
app.use(express.urlencoded({ extended: true }));
// To parse the incoming requests with JSON payloads
app.use(express.json());
app.use(compress());
// secure apps by setting various HTTP headers
app.use(helmet());
// CORS middleware
var corsFrontendSources = process.env.CORS_ALLOWED_ORIGINS;
var corsOptions = {
  origin: corsFrontendSources,
  // credentials: true,
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));

// # Routes
app.use('/', actuatorRoutes);

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
