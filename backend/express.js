import compress from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import path from "path";
// * Importing Routes
import actuatorSlidersRoutes from "./routes/actuatorSliders.routes";
import actuatorSwitchesRoutes from "./routes/actuatorSwitches.routes";
import sensorRoutes from "./routes/sensor.routes";

// # DotEnv configuration
// letting it know where to look for the .env file
dotenv.config({ path: path.resolve(__dirname, "./.env") });

// # Server Creation
const app = express();

// # Middleware
app.use(cookieParser());
// parse body params and attach them to req.body
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
//app.use(cors(corsOptions));
app.use(cors());

// # Routes
app.use("/api/v1/actuator/sliders", actuatorSlidersRoutes);
app.use("/api/v1/actuator/switches", actuatorSwitchesRoutes);
app.use("/api/v1/sensor", sensorRoutes);

// # Serving the frontend build files
// Make sure to serve the static files from the Vite build output directory
app.use(express.static(path.join(__dirname, "../dist")));

// Catch-all routes for the different entry points
app.get("/landing/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "landing", "index.html"));
});

app.get("/user/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "user", "index.html"));
});

app.get("/settings/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "settings", "index.html"));
});

app.get("/dashboard/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "dashboard", "index.html"));
});

// Default catch-all route to serve the main index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

export default app;
