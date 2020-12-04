import { config } from "dotenv";
import { resolve } from "path";

config({
  path: resolve(__dirname, `../.env.${process.env.NODE_ENV || "development"}`),
});
export default {
  env: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT as string, 10) || 8081,
};
