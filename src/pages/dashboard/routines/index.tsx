import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { Routines } from "@/components/Routines/Routines";
import { getClientEnvironment } from "@/lib/relay_client_environment";
import { routines_Query } from "@/queries/__generated__/routines_Query.graphql";
import { usePreloadedQuery } from "react-relay";
import { RelayProps, withRelay } from "relay-nextjs";
import { graphql } from "relay-runtime";

const RoutinesQuery = graphql`
  query routines_Query {
    viewer {
      ...useAuthRedirectFragment
      ...RoutinesFragment
    }
  }
`;

function PRoutines({ preloadedQuery }: RelayProps<{}, routines_Query>) {
  const data = usePreloadedQuery(RoutinesQuery, preloadedQuery);
  useRedirectIfUserNotExist({
    user: data.viewer,
  });

  if (!data.viewer) {
    return null;
  }

  return <Routines queryRef={data.viewer} />;
}

function Loading() {
  return <div>Loading...</div>;
}

const RoutinesPage = withRelay(PRoutines, RoutinesQuery, {
  fallback: <Loading />,
  createClientEnvironment: () => getClientEnvironment()!,
  serverSideProps: async (ctx) => {
    //@ts-ignore
    const token = ctx.req?.cookies["auth"] ?? null;
    return { token };
  },
  createServerEnvironment: async (_, { token }: { token: string | null }) => {
    const { createServerEnvironment } = await import(
      "@/lib/server/relay_server_environment"
    );
    return createServerEnvironment(token);
  },
});

// @ts-ignore
RoutinesPage.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default RoutinesPage;
