import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { FinishWorkoutForm } from "@/components/Workouts/FinishWorkoutForm";
import { createRelayPage } from "@/lib/relay/createRelayPage";
import { RoutineIDFinish_Query } from "@/queries/__generated__/RoutineIDFinish_Query.graphql";
import { usePreloadedQuery } from "react-relay";
import { RelayProps } from "relay-nextjs";
import { graphql } from "relay-runtime";

const FinishWorkoutQuery = graphql`
  query RoutineIDFinish_Query {
    viewer {
      ...useAuthRedirectFragment
    }
  }
`;

function FinishWorkoutPage({
  preloadedQuery,
}: RelayProps<{}, RoutineIDFinish_Query>) {
  const data = usePreloadedQuery(FinishWorkoutQuery, preloadedQuery);
  useRedirectIfUserNotExist({
    user: data.viewer,
  });

  return <FinishWorkoutForm />;
}

const FinishWorkoutPageDefault = createRelayPage(
  FinishWorkoutPage,
  FinishWorkoutQuery,
);

// @ts-ignore
FinishWorkoutPageDefault.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default FinishWorkoutPageDefault;
