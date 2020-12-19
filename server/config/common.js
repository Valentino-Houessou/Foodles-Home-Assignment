/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
require("dotenv").config({
  path: path.resolve(
    __dirname,
    `../.env.${process.env.NODE_ENV || "development"}`,
  ),
});

module.exports = {
  env: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT, 10) || 4000,
};
