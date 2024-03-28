import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { Routines } from "@/components/Routines/Routines";
import { createRelayPage } from "@/lib/relay/createRelayPage";
import { routines_Query } from "@/queries/__generated__/routines_Query.graphql";
import { usePreloadedQuery } from "react-relay";
import { RelayProps } from "relay-nextjs";
import { graphql } from "relay-runtime";

const RoutinesQuery = graphql`
  query routines_Query {
    viewer {
      ...useAuthRedirectFragment
      ...RoutinesFragment
    }
  }
`;

function RoutinesPage({ preloadedQuery }: RelayProps<{}, routines_Query>) {
  const data = usePreloadedQuery(RoutinesQuery, preloadedQuery);
  useRedirectIfUserNotExist({
    user: data.viewer,
  });

  if (!data.viewer) {
    return null;
  }

  return <Routines queryRef={data.viewer} />;
}

const RoutinesPageDefault = createRelayPage(RoutinesPage, RoutinesQuery);

// @ts-ignore
RoutinesPageDefault.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default RoutinesPageDefault;
