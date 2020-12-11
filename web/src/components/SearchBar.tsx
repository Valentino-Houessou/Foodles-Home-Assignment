import React, { useEffect, useState } from "react";
import { ValueType } from "react-select";
import AsyncSelect from "react-select/async";
import { useClient } from "urql";
import {
  Client,
  SearchClientDocument,
  useSearchClientQuery,
} from "../generated/graphql";
import { mapOptions } from "../utils/mapOptions";
import { CartStatus, SelectOption } from "../utils/types";
import {
  useIsProcessed,
  useSetIsProcessed,
} from "./providers/isProcessedProvider";
import { useSetUser, useUser } from "./providers/UserProvider";

interface SearchBarProps {}

export const SearchBar: React.FC<SearchBarProps> = ({}) => {
  const client = useClient();
  const setUser = useSetUser()!;
  const isProcessed = useIsProcessed();
  const user = useUser();
  const setIsProcessed = useSetIsProcessed()!;
  const [typedValue, setTypedValue] = useState("");
  const [selectedValue, setSelectedValue] = useState({
    value: 0,
    label: "Select a customer",
  } as SelectOption);

  const promiseOptions = async (inputValue: string) => {
    setTypedValue(inputValue);
    const searchResult = await client
      .query(
        SearchClientDocument,
        { name: inputValue },
        { requestPolicy: "cache-and-network" }
      )
      .toPromise();
    return mapOptions(searchResult.data?.searchByName);
  };

  useEffect(() => {
    if (isProcessed === CartStatus.UPDATED_DISHES) {
      const promiseOptions = async () => {
        const searchResult = await client
          .query(
            SearchClientDocument,
            { name: typedValue },
            { requestPolicy: "network-only" }
          )
          .toPromise();
        const clientData: Client = searchResult.data?.searchByName.find(
          (client: Client) => client.id === user?.id
        );

        setSelectedValue({
          value: clientData.id,
          label: `${clientData.email} // ${clientData.credit.toFixed(2)}€`,
        } as SelectOption);
        setIsProcessed(CartStatus.WILL_PROCESS);
      };
      promiseOptions();
    }
  }, [isProcessed, useSearchClientQuery, setSelectedValue]);

  return (
    <AsyncSelect
      instanceId={1}
      value={selectedValue}
      defaultOptions
      onChange={(value: ValueType<SelectOption, false>) => {
        if (value) {
          setSelectedValue(value);
          setUser({ id: value?.value, info: value?.label });
        }
      }}
      loadOptions={promiseOptions}
    />
  );
};
