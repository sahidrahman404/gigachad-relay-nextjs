import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { Logs } from "@/components/Logs/Logs";
import { createRelayPage } from "@/lib/relay/createRelayPage";
import { logs_Query } from "@/queries/__generated__/logs_Query.graphql";
import { usePreloadedQuery } from "react-relay";
import { RelayProps } from "relay-nextjs";
import { graphql } from "relay-runtime";

const LogsQuery = graphql`
  query logs_Query {
    viewer {
      ...useAuthRedirectFragment
      ...LogsFragment
    }
  }
`;

function LogsPage({ preloadedQuery }: RelayProps<{}, logs_Query>) {
  const data = usePreloadedQuery(LogsQuery, preloadedQuery);
  useRedirectIfUserNotExist({
    user: data.viewer,
  });

  if (!data.viewer) {
    return null;
  }

  return <Logs queryRef={data.viewer} />;
}

const LogsPageDefault = createRelayPage(LogsPage, LogsQuery);

// @ts-ignore
LogsPageDefault.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default LogsPageDefault;
