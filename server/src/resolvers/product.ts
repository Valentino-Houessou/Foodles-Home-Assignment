import {
  FieldResolver,
  Query,
  Resolver,
  ResolverInterface,
  Root,
} from "type-graphql";
import { getConnection } from "typeorm";
import { Product } from "../entities/Product";
import config from "../constants";

@Resolver(() => Product)
export class ProductResolver implements ResolverInterface<Product> {
  @Query(() => [Product], { nullable: true })
  async availableProducts(): Promise<Product[] | undefined> {
    const query = getConnection()
      .getRepository(Product)
      .createQueryBuilder("l")
      .where("l.quantity > :quantity", { quantity: 0 })
      .addOrderBy("l.id", "ASC");

    return query.getMany();
  }

  @FieldResolver()
  pictureUrl(@Root() product: Product): string {
    return `${config.images_path}${product.pictureUrl}`;
  }
}
