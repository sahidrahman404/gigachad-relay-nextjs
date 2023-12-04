import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { getClientEnvironment } from "@/lib/relay_client_environment";
import { finishRoutine_Query } from "@/queries/__generated__/finishRoutine_Query.graphql";
import { usePreloadedQuery } from "react-relay";
import { RelayProps, withRelay } from "relay-nextjs";
import { graphql } from "relay-runtime";

const FinishRoutineQuery = graphql`
  query finishRoutine_Query($routineID: ID!) {
    viewer {
      ...useAuthRedirectFragment
    }
    node(id: $routineID) {
      ... on Routine {
        ...AddWorkoutFormFragment
      }
    }
  }
`;

function PFinishWorkout({
  preloadedQuery,
}: RelayProps<{}, finishRoutine_Query>) {
  const data = usePreloadedQuery(FinishRoutineQuery, preloadedQuery);
  useRedirectIfUserNotExist({
    user: data.viewer,
  });

  if (!data.viewer || !data.node) {
    return null;
  }

  return <p>not implemented yet</p>;
}

function Loading() {
  return <div>Loading...</div>;
}

const FinishWorkoutPage = withRelay(PFinishWorkout, FinishRoutineQuery, {
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
FinishWorkoutPage.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default FinishWorkoutPage;
