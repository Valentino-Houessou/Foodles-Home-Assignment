import { Client } from "../generated/graphql";

export const mapOptions = (searchResult: Client[]) => {
  return searchResult.map((client: Client) => ({
    value: client.id,
    label: `${client.email} // ${client.credit.toFixed(2)}€`,
  }));
};
