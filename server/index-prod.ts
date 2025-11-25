import fs from "node:fs";
import path from "node:path";
import { type Server } from "node:http";

import express, { type Express } from "express";
import runApp from "./app";

export async function serveStatic(app: Express, _server: Server) {
  // Try multiple possible locations for the built frontend
  let distPath: string;
  
  const possiblePaths = [
    // When running from dist/index.js
    path.resolve(import.meta.dirname, "../public"),
    // When running from project root
    path.resolve("./dist/public"),
    // Fallback
    path.resolve(process.cwd(), "dist", "public"),
  ];

  distPath = possiblePaths.find(p => fs.existsSync(p)) || possiblePaths[0];

  console.log(`[Static Files] Using path: ${distPath}`);
  console.log(`[Static Files] Path exists: ${fs.existsSync(distPath)}`);
  
  if (fs.existsSync(distPath)) {
    const files = fs.readdirSync(distPath);
    console.log(`[Static Files] Contents: ${files.join(", ")}`);
  }

  // Serve static files with proper MIME types
  app.use(express.static(distPath, {
    maxAge: "1h",
    etag: false,
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".html")) {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.setHeader("Cache-Control", "public, max-age=3600");
      } else if (filePath.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript; charset=utf-8");
      } else if (filePath.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css; charset=utf-8");
      } else if (filePath.endsWith(".json")) {
        res.setHeader("Content-Type", "application/json");
      } else if (filePath.endsWith(".svg")) {
        res.setHeader("Content-Type", "image/svg+xml");
      } else if (filePath.endsWith(".png")) {
        res.setHeader("Content-Type", "image/png");
      } else if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg")) {
        res.setHeader("Content-Type", "image/jpeg");
      } else if (filePath.endsWith(".gif")) {
        res.setHeader("Content-Type", "image/gif");
      } else if (filePath.endsWith(".webp")) {
        res.setHeader("Content-Type", "image/webp");
      }
    },
  }));

  // Fall through to index.html for SPA routing
  app.use("*", (req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    console.log(`[Static Files] Attempting to serve index.html from: ${indexPath}`);
    console.log(`[Static Files] Index exists: ${fs.existsSync(indexPath)}`);
    
    if (fs.existsSync(indexPath)) {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.setHeader("Cache-Control", "public, max-age=3600");
      res.sendFile(indexPath);
    } else {
      console.error(`[Static Files] index.html not found at ${indexPath}`);
      res.status(404).json({ 
        error: "Frontend build not found",
        path: indexPath,
        distPath: distPath,
        requestPath: req.path 
      });
    }
  });
}

(async () => {
  await runApp(serveStatic);
})();
