import { Environment, Network, RecordSource, Store } from "relay-runtime";
import makeGraphQLRequest from "@/lib/my_graphql_api";
import ConnectionHandler from "relay-connection-handler-plus";
import RelayDefaultHandlerProvider from "relay-runtime/lib/handlers/RelayDefaultHandlerProvider";

function handlerProvider(handle: string) {
  switch (handle) {
    case "connection":
      return ConnectionHandler;
    default:
      return RelayDefaultHandlerProvider;
  }
}

// Relay is not prescriptive about how GraphQL requests are made.
// This is an example showing how to request GraphQL data.
// You should fill this in with how to make requests to your GraphQL
// API of choice.

export function createServerNetwork(token: string | null) {
  return Network.create(async (params, variables) => {
    const json = await makeGraphQLRequest({
      token: token,
      text: params.text,
      variables: variables,
    });

    return json;
  });
}

// Optional: this function can take a token used for authentication and pass it into `createServerNetwork`.
export function createServerEnvironment(token: string | null) {
  return new Environment({
    handlerProvider,
    network: createServerNetwork(token),
    store: new Store(new RecordSource()),
    isServer: true,
  });
}
