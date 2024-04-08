import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { StartWorkoutForm } from "@/components/Workouts/StartWorkoutForm";
import { createRelayPage } from "@/lib/relay/createRelayPage";
import { RoutineIDStart_Query } from "@/queries/__generated__/RoutineIDStart_Query.graphql";
import { usePreloadedQuery } from "react-relay";
import { RelayProps } from "relay-nextjs";
import { graphql } from "relay-runtime";

const StartWorkoutQuery = graphql`
  query RoutineIDStart_Query($routineID: ID!) {
    viewer {
      ...useAuthRedirectFragment
      unit
    }
    node(id: $routineID) {
      ... on Routine {
        ...StartWorkoutFormFragment
      }
    }
  }
`;

function StartWorkoutPage({
  preloadedQuery,
}: RelayProps<{}, RoutineIDStart_Query>) {
  const data = usePreloadedQuery(StartWorkoutQuery, preloadedQuery);
  useRedirectIfUserNotExist({
    user: data.viewer,
  });

  if (!data.node || !data.viewer?.unit) {
    return null;
  }

  return <StartWorkoutForm queryRef={data.node} unit={data.viewer.unit} />;
}

const StartWorkoutPageDefault = createRelayPage(
  StartWorkoutPage,
  StartWorkoutQuery,
);

// @ts-ignore
StartWorkoutPageDefault.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default StartWorkoutPageDefault;
