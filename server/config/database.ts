import { config } from "dotenv";
import { resolve } from "path";

config({
  path: resolve(__dirname, `../.env.${process.env.NODE_ENV || "development"}`),
});

export default {
  development: {
    host: process.env.DB_HOST || "127.0.0.1",
    db: process.env.DB_DATABASE || "foodleDb",
    user: process.env.DB_USER || "valentino",
    password: process.env.DB_PASSWORD || "",
    port: process.env.DB_PORT || 5432,
  },
  test: {
    host: process.env.DB_HOST || "127.0.0.1",
    db: process.env.DB_DATABASE || "foodlesDbTest",
    user: process.env.DB_USER || "valentino",
    password: process.env.DB_PASSWORD || "",
    port: process.env.DB_PORT || 5432,
  },
};
