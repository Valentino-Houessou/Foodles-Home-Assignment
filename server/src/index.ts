import "reflect-metadata";
import { openDBConnection } from "./utils/database";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import config from "../config/common";

const main = async () => {
  await openDBConnection();

  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(config.port, () => {
    console.log(`server started on port ${config.port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
