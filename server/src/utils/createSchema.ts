import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { ClientResolver } from "../resolvers/client";

export const createSchema = (): Promise<GraphQLSchema> =>
  buildSchema({ resolvers: [ClientResolver], validate: false });
