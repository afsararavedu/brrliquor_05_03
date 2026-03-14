import express from "express";
import { createServer as createViteServer } from "vite";

export async function setupVite(app: express.Express) {
  const vite = await createViteServer({
    server: { middlewareMode: true },
  });

  app.use(vite.middlewares);
}
