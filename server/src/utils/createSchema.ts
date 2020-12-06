import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { ClientResolver } from "../resolvers/client";
import { ProductResolver } from "../resolvers/product";
import { PurchaseResolver } from "../resolvers/purchase";

export const createSchema = (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [ClientResolver, ProductResolver, PurchaseResolver],
    validate: false,
  });
