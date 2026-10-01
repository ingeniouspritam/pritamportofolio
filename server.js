// server.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
var PORT = process.env.PORT || 3e3;
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Azure Web Service is healthy",
    developer: "Pritam Kumar",
    nodeVersion: process.version,
    environment: process.env.NODE_ENV || "production",
    uptime: `${Math.floor(process.uptime())}s`,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.listen(PORT, () => {
  console.log(`[Azure Web Service] Production server active on port ${PORT}`);
});
