import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import config from "../config/common";
import { createSchema } from "./utils/createSchema";
import { openDBConnection } from "./utils/database";

const main = async () => {
  const conn = await openDBConnection();

  conn.runMigrations();

  const app = express();
  const apolloServer = new ApolloServer({
    schema: await createSchema(),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(config.port, () => {
    console.log(`server started on port ${config.port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
