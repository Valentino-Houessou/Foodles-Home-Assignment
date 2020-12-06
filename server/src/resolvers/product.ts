import { Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Product } from "../entities/Product";

@Resolver()
export class ProductResolver {
  @Query(() => [Product], { nullable: true })
  async availableProducts(): Promise<Product[] | undefined> {
    const query = getConnection()
      .getRepository(Product)
      .createQueryBuilder("l")
      .where("l.quantity > :quantity", { quantity: 0 });

    return query.getMany();
  }
}
