import { ChakraProvider } from "@chakra-ui/react";
import { Provider, createClient } from "urql";

import theme from "../theme";
import { AppProps } from "next/app";
import { UserProvider } from "../components/UserProvider";

const client = createClient({
  url: "http://localhost:4000/graphql",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <UserProvider>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </UserProvider>
    </Provider>
  );
}

export default MyApp;
