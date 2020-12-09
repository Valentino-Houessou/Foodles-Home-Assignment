import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import path from "path";
import "reflect-metadata";
import config from "../config/common";
import { createSchema } from "./utils/createSchema";
import { openDBConnection } from "./utils/database";

const main = async () => {
  const conn = await openDBConnection();

  await conn.runMigrations();

  const app = express();

  //set up cors with express cors middleware
  app.use(cors({ origin: "http://localhost:3000" }));

  const apolloServer = new ApolloServer({
    schema: await createSchema(),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  // to server static files
  app.use(express.static(path.join(__dirname, "../public")));

  app.listen(config.port, () => {
    console.log(`server started on port ${config.port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
