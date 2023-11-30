// lib/client_environment.ts
import { Environment, Network, Store, RecordSource } from "relay-runtime";
import makeGraphQLRequest from "@/lib/my_graphql_api";
import { getToken } from "@/lib/utils";
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

export function createClientNetwork() {
  return Network.create(async (params, variables) => {
    const token = await getToken();
    const json = await makeGraphQLRequest({
      token: token,
      text: params.text,
      variables: variables,
    });
    return json;
  });
}

let clientEnv: Environment | undefined;
export function getClientEnvironment() {
  if (typeof window === "undefined") return null;

  if (clientEnv == null) {
    clientEnv = new Environment({
      handlerProvider,
      network: createClientNetwork(),
      store: new Store(new RecordSource()),
      isServer: false,
    });
  }

  return clientEnv;
}
