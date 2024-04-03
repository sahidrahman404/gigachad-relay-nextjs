import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { EditRoutineForm } from "@/components/Routines/EditRoutineForm";
import { createRelayPage } from "@/lib/relay/createRelayPage";
import { RoutineIDEdit_Query } from "@/queries/__generated__/RoutineIDEdit_Query.graphql";
import { ReactNode } from "react";
import { usePreloadedQuery } from "react-relay";
import { RelayProps } from "relay-nextjs";
import { graphql } from "relay-runtime";

const EditRoutineQuery = graphql`
  query RoutineIDEdit_Query($routineID: ID!) {
    viewer {
      ...useAuthRedirectFragment
      ...EditRoutineFormFragment
    }
    node(id: $routineID) {
      ... on Routine {
        ...useStartWorkoutFormFragment
      }
    }
  }
`;

function EditRoutinePage({
  preloadedQuery,
}: RelayProps<{}, RoutineIDEdit_Query>) {
  const data = usePreloadedQuery(EditRoutineQuery, preloadedQuery);
  useRedirectIfUserNotExist({ user: data.viewer });

  if (!data.node || !data.viewer) {
    return null;
  }

  return <EditRoutineForm queryRef={data.viewer} routineQueryRef={data.node} />;
}

const EditRoutinePageDefault = createRelayPage(
  EditRoutinePage,
  EditRoutineQuery,
);

//@ts-ignore
EditRoutinePageDefault.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default EditRoutinePageDefault;
