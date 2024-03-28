import { Exercises } from "@/components/Exercises/Exercises";
import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { createRelayPage } from "@/lib/relay/createRelayPage";
import { exercises_Query } from "@/queries/__generated__/exercises_Query.graphql";
import { ReactNode } from "react";
import { usePreloadedQuery } from "react-relay";
import { RelayProps } from "relay-nextjs";
import { graphql } from "relay-runtime";

const ExercisesQuery = graphql`
  query exercises_Query {
    viewer {
      ...useAuthRedirectFragment
    }
    ...ExercisesParentFragment
  }
`;

function ExercisesPage({ preloadedQuery }: RelayProps<{}, exercises_Query>) {
  const data = usePreloadedQuery(ExercisesQuery, preloadedQuery);
  useRedirectIfUserNotExist({
    user: data.viewer,
  });

  return (
    <Exercises
      className="grid grid-cols-4 gap-y-4 md:gap-x-4"
      queryRef={data}
    />
  );
}

const ExercisesPageDefault = createRelayPage(ExercisesPage, ExercisesQuery);

// @ts-ignore
ExercisesPageDefault.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default ExercisesPageDefault;
