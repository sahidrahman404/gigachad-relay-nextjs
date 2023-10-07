// lib/client_environment.ts
import { Environment, Network, Store, RecordSource } from 'relay-runtime';
import makeGraphQLRequest from '@/lib/my_graphql_api';

export function createClientNetwork() {
  return Network.create(async (params, variables) => {
    const res = await fetch("http://localhost:3000/api/tokens/get")
    const token = await res.json() as string | null
    const json = await makeGraphQLRequest({
      token: token,
      text: params.text,
      variables: variables
    })
    return json
  });
}

let clientEnv: Environment | undefined;
export function getClientEnvironment() {
  if (typeof window === 'undefined') return null;

  if (clientEnv == null) {
    clientEnv = new Environment({
      network: createClientNetwork(),
      store: new Store(new RecordSource()),
      isServer: false,
    });
  }

  return clientEnv;
}
