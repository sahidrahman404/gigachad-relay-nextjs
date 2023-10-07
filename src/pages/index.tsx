import { getClientEnvironment } from "@/lib/relay_client_environment"
import { pages_testQuery } from "@/queries/__generated__/pages_testQuery.graphql"
import { usePreloadedQuery } from "react-relay"
import { RelayProps, withRelay } from "relay-nextjs"
import { graphql } from "relay-runtime"

const TestQuery = graphql`
query pages_testQuery {
  users(first: 1) {
    edges {
      node {
        name
        routines(first: 1) {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }
}
`

function Test({ preloadedQuery }: RelayProps<{}, pages_testQuery>) {
  const query = usePreloadedQuery(TestQuery, preloadedQuery)
  const user = query.users.edges && query.users.edges[0]?.node?.name
  return (
    <p>{user}</p>
  )
}

function Loading() {
  return <div>Loading...</div>;
}

export default withRelay(Test, TestQuery, {
  // Fallback to render while the page is loading.
  // This property is optional.
  fallback: <Loading />,
  // Create a Relay environment on the client-side.
  // Note: This function must always return the same value.
  createClientEnvironment: () => getClientEnvironment()!,
  // Gets server side props for the page.
  serverSideProps: async (ctx) => {
    // This is an example of getting an auth token from the request context.
    // If you don't need to authenticate users this can be removed and return an
    // empty object instead.
    const token = ctx.req?.headers.cookie ?? null
    // if (token == null) {
    //   return {
    //     redirect: { destination: '/login', permanent: false },
    //   };
    // }
    
    return { token };
  },
  // Server-side props can be accessed as the second argument
  // to this function.
  createServerEnvironment: async (
    ctx,
    // The object returned from serverSideProps. If you don't need a token
    // you can remove this argument.
    { token }: { token: string | null }
  ) => {
    const { createServerEnvironment } = await import('@/lib/server/relay_server_environment');
    return createServerEnvironment(token);
  },
});
