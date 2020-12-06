import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "../resolvers/hello";
import { ClientResolver } from "../resolvers/client";

export const createSchema = (): Promise<GraphQLSchema> =>
  buildSchema({ resolvers: [HelloResolver, ClientResolver], validate: false });
