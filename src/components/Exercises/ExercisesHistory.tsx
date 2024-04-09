import { graphql } from "relay-runtime";
import { usePaginationFragment } from "react-relay";
import { ExercisesHistoryFragment$key } from "@/queries/__generated__/ExercisesHistoryFragment.graphql";
import { ExerciseHistoryCard } from "./ExerciseHistoryCard";
import { useCallback, useTransition } from "react";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { InfiniteScroll } from "../common/InfiniteScroll";

const ExercisesHistoryFragment = graphql`
  fragment ExercisesHistoryFragment on Exercise
  @refetchable(queryName: "ExercisesHistoryFragmentQuery")
  @argumentDefinitions(
    cursor: { type: "Cursor" }
    count: { type: "Int", defaultValue: 4 }
    orderby: { type: "OrderDirection", defaultValue: DESC }
  ) {
    workoutLogs(
      after: $cursor
      first: $count
      orderBy: { direction: $orderby, field: ID }
    ) @connection(key: "ExercisesHistoryFragment_workoutLogs") {
      edges {
        node {
          id
          ...ExerciseHistoryCardFragment
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

type ExercisesHistoryProps = {
  queryRef: ExercisesHistoryFragment$key;
};

function ExercisesHistory({ queryRef }: ExercisesHistoryProps) {
  const [isPending, startTransition] = useTransition();
  const { data, loadNext } = usePaginationFragment(
    ExercisesHistoryFragment,
    queryRef,
  );

  const onLoadMore = useCallback(() => {
    startTransition(() => {
      loadNext(4);
    });
  }, [loadNext]);

  return (
    <div className="space-y-3">
      {data.workoutLogs.edges?.map((workoutLog) => {
        if (workoutLog?.node) {
          return (
            <ExerciseHistoryCard
              queryRef={workoutLog.node}
              key={workoutLog.node.id}
            />
          );
        }
        return null;
      }) ?? null}

      {isPending && <LoadingSpinner className="mx-auto w-6 h-6" />}
      <InfiniteScroll
        hasNextPage={data.workoutLogs.pageInfo.hasNextPage}
        loadFn={onLoadMore}
      />
    </div>
  );
}

export { ExercisesHistory };
