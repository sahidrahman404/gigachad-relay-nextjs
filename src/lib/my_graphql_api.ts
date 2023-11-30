import { GraphQLResponse, Variables } from "relay-runtime";

type MakeGraphQLRequestParams = {
  token: string | null;
  text: string | null;
  variables: Variables;
};

export default async function makeGraphQLRequest({
  token,
  text,
  variables,
}: MakeGraphQLRequestParams): Promise<GraphQLResponse> {
  const header =
    token !== null
      ? {
          Authorization: `Bearer ${token}`,
        }
      : undefined;
  const hostname = process.env.NEXT_PUBLIC_BACKEND_HOSTNAME;
  const response = await fetch(`${hostname}/query`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...header,
    },
    mode: "cors",
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  const result = await response.text();
  return JSON.parse(result) as GraphQLResponse;
}
