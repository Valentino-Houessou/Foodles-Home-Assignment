import "reflect-metadata";
import { openDBConnection } from "./utils/database";

const main = async () => {
  await openDBConnection();
};

main().catch((err) => {
  console.log(err);
});
