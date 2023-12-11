import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { StartWorkoutForm } from "@/components/Workouts/StartWorkoutForm";
import { getClientEnvironment } from "@/lib/relay_client_environment";
import { RoutineID_Query } from "@/queries/__generated__/RoutineID_Query.graphql";
import { usePreloadedQuery } from "react-relay";
import { RelayProps, withRelay } from "relay-nextjs";
import { graphql } from "relay-runtime";

const RoutineQuery = graphql`
  query RoutineID_Query {
    viewer {
      ...useAuthRedirectFragment
    }
  }
`;

function PStartWorkout({ preloadedQuery }: RelayProps<{}, RoutineID_Query>) {
  const data = usePreloadedQuery(RoutineQuery, preloadedQuery);
  useRedirectIfUserNotExist({
    user: data.viewer,
  });

  return <StartWorkoutForm />;
}

function Loading() {
  return <div>Loading...</div>;
}

const StartWorkoutPage = withRelay(PStartWorkout, RoutineQuery, {
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
StartWorkoutPage.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default StartWorkoutPage;
