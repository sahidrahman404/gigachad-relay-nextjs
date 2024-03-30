import { EditExerciseForm } from "@/components/Exercises/EditExerciseForm";
import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { createRelayPage } from "@/lib/relay/createRelayPage";
import { ExerciseIDEdit_Query } from "@/queries/__generated__/ExerciseIDEdit_Query.graphql";
import { ReactNode } from "react";
import { usePreloadedQuery } from "react-relay";
import { RelayProps } from "relay-nextjs";
import { graphql } from "relay-runtime";

const ExerciseEditPageQuery = graphql`
  query ExerciseIDEdit_Query($exerciseID: ID!) {
    viewer {
      ...useAuthRedirectFragment
    }
    node(id: $exerciseID) {
      ... on Exercise {
        ...ExerciseFragment
      }
    }
    ...EditExerciseFormFragment
  }
`;

function ExerciseEditPage({
  preloadedQuery,
}: RelayProps<{}, ExerciseIDEdit_Query>) {
  const data = usePreloadedQuery(ExerciseEditPageQuery, preloadedQuery);
  useRedirectIfUserNotExist({ user: data.viewer });
  if (!data.node) {
    return null;
  }
  return (
    <EditExerciseForm queryRef={data} exerciseFragmentQueryRef={data.node} />
  );
}

const ExerciseEditPageDefault = createRelayPage(
  ExerciseEditPage,
  ExerciseEditPageQuery,
);

//@ts-ignore
ExerciseEditPageDefault.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default ExerciseEditPageDefault;
