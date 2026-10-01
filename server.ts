import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Security and compression basics
app.use(express.json());

// Serve static assets from Vite dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Health check endpoint for Azure App Service probes and monitoring
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Azure Web Service is healthy',
    developer: 'Pritam Kumar',
    nodeVersion: process.version,
    environment: process.env.NODE_ENV || 'production',
    uptime: `${Math.floor(process.uptime())}s`,
    timestamp: new Date().toISOString()
  });
});

// Single Page Application (SPA) routing fallback
// Matches all routes and serves dist/index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[Azure Web Service] Production server active on port ${PORT}`);
});
