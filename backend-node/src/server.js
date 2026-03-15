import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import { pool } from "./config/pool.js";
import { registroRouter } from "./routes/registroRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.status(200).json({ ok: true, db: "up" });
  } catch {
    res.status(503).json({ ok: false, db: "down" });
  }
});

app.use("/registros", registroRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ ok: false, error: "internal_error" });
});

app.listen(env.port, () => {
  console.log(`API running on http://localhost:${env.port}`);
});
