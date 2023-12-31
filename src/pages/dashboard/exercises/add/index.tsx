import { AddExerciseForm } from "@/components/Exercises/AddExerciseForm";
import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { getClientEnvironment } from "@/lib/relay_client_environment";
import { addExercise_Query } from "@/queries/__generated__/addExercise_Query.graphql";
import { usePreloadedQuery } from "react-relay";
import { RelayProps, withRelay } from "relay-nextjs";
import { graphql } from "relay-runtime";

const AddExerciseQuery = graphql`
  query addExercise_Query {
    viewer {
      ...useAuthRedirectFragment
      ...ExercisesFragment
    }
    ...AddExerciseFormFragment
  }
`;

function AddExercise({ preloadedQuery }: RelayProps<{}, addExercise_Query>) {
  const data = usePreloadedQuery(AddExerciseQuery, preloadedQuery);
  useRedirectIfUserNotExist({
    user: data.viewer,
  });

  if (!data.viewer) {
    return null;
  }

  return (
    <AddExerciseForm queryRef={data} exercisesFragmentQueryRef={data.viewer} />
  );
}

function Loading() {
  return <div>Loading...</div>;
}

const AddExercisePage = withRelay(AddExercise, AddExerciseQuery, {
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
AddExercisePage.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default AddExercisePage;
