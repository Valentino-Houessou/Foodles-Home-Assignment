import React from "react";
import AsyncSelect from "react-select/async";
import { useClient } from "urql";
import { SearchClientDocument } from "../generated/graphql";
import { mapOptions } from "../utils/mapOptions";
import { useSetUser } from "./UserProvider";

interface SearchBarProps {}

export const SearchBar: React.FC<SearchBarProps> = ({}) => {
  const client = useClient();
  const setUser = useSetUser()!;

  const promiseOptions = async (inputValue: string) => {
    const searchResult = await client
      .query(SearchClientDocument, { name: inputValue })
      .toPromise();
    return mapOptions(searchResult.data?.searchByName);
  };

  return (
    <AsyncSelect
      instanceId={1}
      placeholder="Select a customer"
      cacheOptions
      defaultOptions
      onChange={(value) => {
        setUser({ ...value });
      }}
      loadOptions={promiseOptions}
    />
  );
};
