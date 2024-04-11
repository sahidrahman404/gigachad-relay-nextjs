import { LogsFragment$key } from "@/queries/__generated__/LogsFragment.graphql";
import { useCallback, useTransition } from "react";
import { usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { InfiniteScroll } from "../common/InfiniteScroll";
import { LogCard } from "./LogCard";
import Head from "next/head";

const LogsFragment = graphql`
  fragment LogsFragment on User
  @refetchable(queryName: "LogsFragmentPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "Cursor" }
    count: { type: "Int", defaultValue: 4 }
    orderby: { type: "OrderDirection", defaultValue: DESC }
  ) {
    id
    workouts(
      after: $cursor
      first: $count
      orderBy: { direction: $orderby, field: ID }
    ) @connection(key: "LogsFragment_workouts") {
      edges {
        node {
          id
          ...LogCardFragment
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

function Logs({ queryRef }: { queryRef: LogsFragment$key }) {
  const [isPending, startTransition] = useTransition();
  const { data, loadNext } = usePaginationFragment(LogsFragment, queryRef);

  const onLoadMore = useCallback(() => {
    startTransition(() => {
      loadNext(4);
    });
  }, [loadNext]);

  return (
    <div className="space-y-4">
      <Head>
        <title>Logs - Gigachad</title>
        <meta property="og:title" content="Logs - Gigachad" key="title" />
      </Head>
      {data.workouts.edges?.map((log) => {
        if (log?.node) {
          return <LogCard queryRef={log.node} key={log.node.id} />;
        }
        return null;
      })}
      {isPending && <LoadingSpinner className="mx-auto w-6 h-6" />}
      <InfiniteScroll
        hasNextPage={data.workouts.pageInfo.hasNextPage}
        loadFn={onLoadMore}
      />
    </div>
  );
}

export { Logs };
