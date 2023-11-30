import { Exercises } from "@/components/Exercises/Exercises";
import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { getClientEnvironment } from "@/lib/relay_client_environment";
import { exercises_Query } from "@/queries/__generated__/exercises_Query.graphql";
import { usePreloadedQuery } from "react-relay";
import { RelayProps, withRelay } from "relay-nextjs";
import { graphql } from "relay-runtime";

const ExercisesQuery = graphql`
  query exercises_Query {
    viewer {
      ...useAuthRedirectFragment
    }
    ...ExercisesParentFragment
  }
`;

function PExercises({ preloadedQuery }: RelayProps<{}, exercises_Query>) {
  const data = usePreloadedQuery(ExercisesQuery, preloadedQuery);
  useRedirectIfUserNotExist({
    user: data.viewer,
  });

  if (!data.viewer) {
    return null;
  }

  return (
    <Exercises
      className="grid grid-cols-4 gap-y-4 md:gap-x-4"
      queryRef={data}
    />
  );
}

function Loading() {
  return <div>Loading...</div>;
}

const ExercisesPage = withRelay(PExercises, ExercisesQuery, {
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
ExercisesPage.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default ExercisesPage;
