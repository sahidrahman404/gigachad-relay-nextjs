import { RoutinesFragment$key } from "@/queries/__generated__/RoutinesFragment.graphql";
import { usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { RoutinesEmptyState } from "./RoutinesEmptyState";
import { Routine } from "./Routine";
import { LinkButton } from "../ReactAriaUI/LinkButton";
import { createContext, useCallback, useTransition } from "react";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { InfiniteScroll } from "../common/InfiniteScroll";
import Head from "next/head";

const RoutinesFragment = graphql`
  fragment RoutinesFragment on User
  @refetchable(queryName: "RoutinesFragmentPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "Cursor" }
    count: { type: "Int", defaultValue: 4 }
    orderby: { type: "OrderDirection", defaultValue: DESC }
  ) {
    id
    routines(
      after: $cursor
      first: $count
      orderBy: { direction: $orderby, field: ID }
    ) @connection(key: "RoutinesFragment_routines") {
      edges {
        node {
          id
          ...RoutineFragment
        }
      }
      pageInfo {
        hasNextPage
      }
    }
    ...RoutinesEmptyStateFragment
  }
`;

type RoutinesProps = {
  queryRef: RoutinesFragment$key;
};

const RoutinesData = createContext<RoutinesFragment$key | null | undefined>(
  null,
);

function Routines({ queryRef }: RoutinesProps) {
  const [isPending, startTransition] = useTransition();
  const { data, loadNext } = usePaginationFragment(RoutinesFragment, queryRef);

  const onLoadMore = useCallback(() => {
    startTransition(() => {
      loadNext(4);
    });
  }, [loadNext]);

  if (!data.routines.edges) {
    return null;
  }

  if (data.routines.edges.length === 0) {
    return <RoutinesEmptyState queryRef={data} />;
  }

  return (
    <RoutinesData.Provider value={queryRef}>
      <div className="space-y-4">
        <Head>
          <title>Routines - Gigachad</title>
          <meta property="og:title" content="Routines - Gigachad" key="title" />
        </Head>
        <LinkButton href={"/dashboard/routines/add"}>New Routine</LinkButton>
        {data.routines.edges?.map((routine) => {
          if (routine?.node) {
            return <Routine queryRef={routine.node} key={routine.node.id} />;
          }
        })}
        {isPending && <LoadingSpinner className="mx-auto w-6 h-6" />}
        <InfiniteScroll
          hasNextPage={data.routines.pageInfo.hasNextPage}
          loadFn={onLoadMore}
        />
      </div>
    </RoutinesData.Provider>
  );
}

export { Routines, RoutinesFragment, RoutinesData };
