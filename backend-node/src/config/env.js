import dotenv from "dotenv";

dotenv.config();

const toInt = (value, fallback) => {
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
};

export const env = {
  port: toInt(process.env.PORT, 3001),
  db: {
    host: process.env.DB_HOST || "localhost",
    port: toInt(process.env.DB_PORT, 5432),
    database: process.env.DB_NAME || "sistema_registros",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
  },
};
