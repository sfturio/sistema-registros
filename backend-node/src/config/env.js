import dotenv from "dotenv";

dotenv.config();

const toInt = (value, fallback) => {
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
};

const toBool = (value, fallback = false) => {
  if (value === undefined) return fallback;
  return ["1", "true", "yes", "on", "require"].includes(
    String(value).toLowerCase()
  );
};

const isSupabaseHost = (host = "") =>
  String(host).includes(".supabase.co") || String(host).includes(".supabase.com");

const connectionString = process.env.DATABASE_URL;
const sslEnabled =
  toBool(process.env.DB_SSL, false) ||
  Boolean(connectionString) ||
  isSupabaseHost(process.env.DB_HOST);

export const env = {
  port: toInt(process.env.PORT, 3001),
  db: connectionString
    ? {
        connectionString,
        ssl: sslEnabled ? { rejectUnauthorized: false } : false,
      }
    : {
        host: process.env.DB_HOST || "localhost",
        port: toInt(process.env.DB_PORT, 5432),
        database: process.env.DB_NAME || "sistema_registros",
        user: process.env.DB_USER || "postgres",
        password: process.env.DB_PASSWORD || "postgres",
        ssl: sslEnabled ? { rejectUnauthorized: false } : false,
      },
};
