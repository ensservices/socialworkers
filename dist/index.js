var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
import "dotenv/config";

// server/index-prod.ts
import fs from "node:fs";
import path from "node:path";
import express2 from "express";

// server/app.ts
import express from "express";

// server/routes.ts
import { createServer } from "http";

// server/db.ts
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  contactSubmissions: () => contactSubmissions,
  insertContactSubmissionSchema: () => insertContactSubmissionSchema,
  insertUserSchema: () => insertUserSchema,
  users: () => users
});
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow()
});
var insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true
});

// server/db.ts
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}
var db = drizzle({
  connection: process.env.DATABASE_URL,
  schema: schema_exports,
  ws
});

// server/storage.ts
var DbStorage = class {
  async createContactSubmission(submission) {
    const [result] = await db.insert(contactSubmissions).values(submission).returning();
    return result;
  }
};
var storage = new DbStorage();

// server/routes.ts
import { fromZodError } from "zod-validation-error";
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const validationResult = insertContactSubmissionSchema.safeParse(req.body);
      if (!validationResult.success) {
        return res.status(400).json({
          error: fromZodError(validationResult.error).toString()
        });
      }
      const submission = await storage.createContactSubmission(validationResult.data);
      res.json(submission);
    } catch (error) {
      console.error("Error creating contact submission:", error);
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/app.ts
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
var app = express();
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path2 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path2.startsWith("/api")) {
      let logLine = `${req.method} ${path2} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
async function runApp(setup) {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  await setup(app, server);
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
}

// server/index-prod.ts
async function serveStatic(app2, _server) {
  let distPath;
  const possiblePaths = [
    // When running from dist/index.js
    path.resolve(import.meta.dirname, "../public"),
    // When running from project root
    path.resolve("./dist/public"),
    // Fallback
    path.resolve(process.cwd(), "dist", "public")
  ];
  distPath = possiblePaths.find((p) => fs.existsSync(p)) || possiblePaths[0];
  console.log(`[Static Files] Using path: ${distPath}`);
  console.log(`[Static Files] Path exists: ${fs.existsSync(distPath)}`);
  if (fs.existsSync(distPath)) {
    const files = fs.readdirSync(distPath);
    console.log(`[Static Files] Contents: ${files.join(", ")}`);
  }
  app2.use(express2.static(distPath, {
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
    }
  }));
  app2.use("*", (req, res) => {
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
        distPath,
        requestPath: req.path
      });
    }
  });
}
(async () => {
  await runApp(serveStatic);
})();
export {
  serveStatic
};
