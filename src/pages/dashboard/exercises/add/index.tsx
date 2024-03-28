import { AddExerciseForm } from "@/components/Exercises/AddExerciseForm";
import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { createRelayPage } from "@/lib/relay/createRelayPage";
import { addExercise_Query } from "@/queries/__generated__/addExercise_Query.graphql";
import { usePreloadedQuery } from "react-relay";
import { RelayProps } from "relay-nextjs";
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

function AddExercisePage({
  preloadedQuery,
}: RelayProps<{}, addExercise_Query>) {
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

const AddExercisePageDefault = createRelayPage(
  AddExercisePage,
  AddExerciseQuery,
);

// @ts-ignore
AddExercisePageDefault.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default AddExercisePageDefault;
