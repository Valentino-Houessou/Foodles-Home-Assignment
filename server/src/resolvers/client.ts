import { Resolver, Query, Arg } from "type-graphql";
import { getConnection } from "typeorm";
import { Client } from "../entities/Client";

@Resolver()
export class ClientResolver {
  @Query(() => [Client], { nullable: true })
  async searchByName(
    @Arg("name") name: string,
    @Arg("limit", { defaultValue: 5 }) limit: number,
  ): Promise<Client[] | undefined> {
    const searchQuery = getConnection()
      .getRepository(Client)
      .createQueryBuilder("l")
      .where("l.name ilike :name", { name: `%${name}%` })
      .take(limit);

    return searchQuery.getMany();
  }
}
