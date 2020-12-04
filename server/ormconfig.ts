import commonConfig from "./config/common";
import config from "./config/database";
import path from "path";
import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions[] = [
  {
    name: "development",
    type: "postgres",
    database: config.development.db,
    synchronize: true,
    logging: commonConfig.env === "development",
    entities: [path.join(__dirname, "/src/entities/**/*{.ts,.js}")],
    migrations: [path.join(__dirname, "/src/migrations/**/*{.ts,.js}")],
    cli: {
      entitiesDir: "src/entities",
      migrationsDir: "src/migrations",
    },
    host: config.development.host,
    port: Number(config.development.port),
    username: config.development.user,
    password: config.development.password,
  },
  {
    name: "test",
    type: "postgres",
    database: config.test.db,
    synchronize: true,
    dropSchema: true,
    logging: false,
    entities: [path.join(__dirname, "/src/entities/**/*{.ts,.js}")],
    host: config.test.host,
    port: Number(config.test.port),
    username: config.test.user,
    password: config.test.password,
  },
];

export = connectionOptions;
