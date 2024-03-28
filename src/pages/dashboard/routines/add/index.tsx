import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { AddRoutineForm } from "@/components/Routines/AddRoutineForm";
import { createRelayPage } from "@/lib/relay/createRelayPage";
import { addRoutine_Query } from "@/queries/__generated__/addRoutine_Query.graphql";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { usePreloadedQuery } from "react-relay";
import { RelayProps } from "relay-nextjs";
import { graphql } from "relay-runtime";

const AddRoutineQuery = graphql`
  query addRoutine_Query {
    viewer {
      ...useAuthRedirectFragment
      ...AddRoutineFormFragment
    }
    exercises(first: 1) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

function AddRoutinePage({ preloadedQuery }: RelayProps<{}, addRoutine_Query>) {
  const data = usePreloadedQuery(AddRoutineQuery, preloadedQuery);
  const router = useRouter();

  useEffect(() => {
    if (!data.exercises?.edges || data.exercises.edges?.length === 0) {
      router.push("/dashboard/exercises");
    }
  }, []);

  useRedirectIfUserNotExist({
    user: data.viewer,
  });

  if (!data.viewer) {
    return null;
  }

  return <AddRoutineForm queryRef={data.viewer} />;
}

const AddRoutinePageDefault = createRelayPage(AddRoutinePage, AddRoutineQuery);

// @ts-ignore
AddRoutinePageDefault.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default AddRoutinePageDefault;
