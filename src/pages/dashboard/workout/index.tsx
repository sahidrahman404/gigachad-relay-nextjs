import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { Workouts } from "@/components/Workouts/Workouts";
import { getClientEnvironment } from "@/lib/relay_client_environment";
import { workout_Query } from "@/queries/__generated__/workout_Query.graphql";
import { usePreloadedQuery } from "react-relay";
import { RelayProps, withRelay } from "relay-nextjs";
import { graphql } from "relay-runtime";

const WorkoutQuery = graphql`
  query workout_Query {
    viewer {
      ...useAuthRedirectFragment
      ...WorkoutsFragment
    }
  }
`;

function PEWorkout({ preloadedQuery }: RelayProps<{}, workout_Query>) {
  const data = usePreloadedQuery(WorkoutQuery, preloadedQuery);
  useRedirectIfUserNotExist({
    user: data.viewer,
  });
  return <Workouts />;
}

function Loading() {
  return <div>Loading...</div>;
}

const WorkoutPage = withRelay(PEWorkout, WorkoutQuery, {
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
WorkoutPage.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default WorkoutPage;
