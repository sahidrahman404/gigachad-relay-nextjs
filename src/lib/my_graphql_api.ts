import { GraphQLResponse, Variables } from "relay-runtime";

type MakeGraphQLRequestParams = {
  token: string | null
  text: string | null,
  variables: Variables,
}

export default async function makeGraphQLRequest({ token, text, variables }: MakeGraphQLRequestParams): Promise<GraphQLResponse> {
  const header = token !== null ? {
    'Authorization': `Bearer ${token}`,
  } : undefined
  const response = await fetch('http://localhost:4444/query', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...header
    },
    mode: 'cors',
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  const status = response.status;

  if (status === 401) {
    fetch(`http://localhost:3000/api/tokens/delete/${token}`);
    const response = await fetch("http://localhost:4444/query", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
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


  const result = await response.text();
  return JSON.parse(result) as GraphQLResponse
}
