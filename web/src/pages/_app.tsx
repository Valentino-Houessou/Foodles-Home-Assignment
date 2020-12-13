import { ChakraProvider } from "@chakra-ui/react";
import { cacheExchange } from "@urql/exchange-graphcache";
import { AppProps } from "next/app";
import { createClient, dedupExchange, fetchExchange, Provider } from "urql";
import { ContextProvider } from "../components/providers/ContextProvider";
import "../styles/imageOverlay.css";
import theme from "../theme";

const client = createClient({
  url: process.env.NEXT_PUBLIC_BACK_END_URL || "http://localhost:4000/graphql",
  exchanges: [dedupExchange, cacheExchange({}), fetchExchange],
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
