import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { createClient, Provider } from "urql";
import { ContextProvider } from "../components/ContextProvider";
import theme from "../theme";

const client = createClient({
  url: "http://localhost:4000/graphql",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <ContextProvider>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ContextProvider>
    </Provider>
  );
}

export default MyApp;
