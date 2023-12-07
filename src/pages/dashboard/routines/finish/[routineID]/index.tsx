import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { FinishWorkoutForm } from "@/components/Workouts/FinishWorkoutForm";
import { getClientEnvironment } from "@/lib/relay_client_environment";
import { RoutineIDFinish_Query } from "@/queries/__generated__/RoutineIDFinish_Query.graphql";
import { usePreloadedQuery } from "react-relay";
import { RelayProps, withRelay } from "relay-nextjs";
import { graphql } from "relay-runtime";

const FinishWorkoutQuery = graphql`
  query RoutineIDFinish_Query($routineID: ID!) {
    viewer {
      ...useAuthRedirectFragment
    }
    node(id: $routineID) {
      ... on Routine {
        ...FinishWorkoutFormFragment
      }
    }
  }
`;

function PFinishWorkout({
  preloadedQuery,
}: RelayProps<{}, RoutineIDFinish_Query>) {
  const data = usePreloadedQuery(FinishWorkoutQuery, preloadedQuery);
  useRedirectIfUserNotExist({
    user: data.viewer,
  });

  if (!data.viewer || !data.node) {
    return null;
  }

  return <FinishWorkoutForm queryRef={data.node} />;
}

function Loading() {
  return <div>Loading...</div>;
}

const FinishWorkoutPage = withRelay(PFinishWorkout, FinishWorkoutQuery, {
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
