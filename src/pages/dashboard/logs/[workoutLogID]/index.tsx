import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { Log } from "@/components/Logs/Log";
import { createRelayPage } from "@/lib/relay/createRelayPage";
import { WorkoutLogID_Query } from "@/queries/__generated__/WorkoutLogID_Query.graphql";
import { usePreloadedQuery } from "react-relay";
import { RelayProps } from "relay-nextjs";
import { graphql } from "relay-runtime";

const LogQuery = graphql`
  query WorkoutLogID_Query($workoutLogID: ID!) {
    viewer {
      ...useAuthRedirectFragment
    }
    node(id: $workoutLogID) {
      ... on Workout {
        ...LogFragment
      }
    }
  }
`;

function LogPage({ preloadedQuery }: RelayProps<{}, WorkoutLogID_Query>) {
  const data = usePreloadedQuery(LogQuery, preloadedQuery);
  useRedirectIfUserNotExist({
    user: data.viewer,
  });

  if (!data.node) {
    return <p>not found</p>;
  }

  return <Log queryRef={data.node} />;
}

const LogPageDefault = createRelayPage(LogPage, LogQuery);

// @ts-ignore
LogPageDefault.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default LogPageDefault;
