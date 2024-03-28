import { Exercise } from "@/components/Exercises/Exercise";
import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { createRelayPage } from "@/lib/relay/createRelayPage";
import { ExerciseID_Query } from "@/queries/__generated__/ExerciseID_Query.graphql";
import { usePreloadedQuery } from "react-relay";
import { RelayProps } from "relay-nextjs";
import { graphql } from "relay-runtime";

const ExerciseQuery = graphql`
  query ExerciseID_Query($exerciseID: ID!) {
    viewer {
      ...useAuthRedirectFragment
    }
    node(id: $exerciseID) {
      ... on Exercise {
        ...ExerciseFragment
      }
    }
  }
`;

function ExercisePage({ preloadedQuery }: RelayProps<{}, ExerciseID_Query>) {
  const data = usePreloadedQuery(ExerciseQuery, preloadedQuery);
  useRedirectIfUserNotExist({
    user: data.viewer,
  });

  if (!data.node) {
    return <p>not found</p>;
  }

  return <Exercise queryRef={data.node} />;
}

const ExercisePageDefault = createRelayPage(ExercisePage, ExerciseQuery);

// @ts-ignore
ExercisePageDefault.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default ExercisePageDefault;
