import { createConnection, getConnection, getConnectionOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { Connection } from "typeorm";

export const openDBConnection = async (): Promise<Connection> => {
  const name = process.env.NODE_ENV;
  const connectionOptions = await getConnectionOptions(name);

  return createConnection({
    ...connectionOptions,
    namingStrategy: new SnakeNamingStrategy(),
    name: "default",
  });
};
export const closeDBConnection = async (): Promise<void> => {
  await getConnection().close();
};
