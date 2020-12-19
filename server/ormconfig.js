/* eslint-disable @typescript-eslint/no-var-requires */
const commonConfig = require("./config/common");
const dbConfig = require("./config/database");
const path = require("path");

module.exports = [
  {
    name: "development",
    type: "postgres",
    database: dbConfig.development.db,
    synchronize: true,
    logging: commonConfig.env === "development",
    entities: [path.join(__dirname, "/dist/entities/**/*.js")],
    migrations: [path.join(__dirname, "/dist/migrations/**/*.js")],
    cli: {
      entitiesDir: "dist/entities",
      migrationsDir: "dist/migrations",
    },
    host: dbConfig.development.host,
    port: Number(dbConfig.development.port),
    username: dbConfig.development.user,
    password: dbConfig.development.password,
  },
  {
    name: "test",
    type: "postgres",
    database: dbConfig.test.db,
    synchronize: true,
    dropSchema: true,
    logging: false,
    entities: [path.join(__dirname, "/src/entities/**/*.ts")],
    host: dbConfig.test.host,
    port: Number(dbConfig.test.port),
    username: dbConfig.test.user,
    password: dbConfig.test.password,
  },
];
