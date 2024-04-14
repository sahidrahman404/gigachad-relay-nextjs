import { usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { ListBoxItem, Select } from "../ReactAriaUI/Select";
import type { SelectProps } from "react-aria-components";
import { ExerciseSelectInputFragment$key } from "@/queries/__generated__/ExerciseSelectInputFragment.graphql";
import { useCallback, useTransition } from "react";
import { ExerciseSelectItem } from "./ExerciseSelectItem";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { InfiniteScroll } from "../common/InfiniteScroll";

const ExerciseSelectInputFragment = graphql`
  fragment ExerciseSelectInputFragment on User
  @refetchable(queryName: "ExerciseSelectInputFragmentQuery")
  @argumentDefinitions(
    cursor: { type: "Cursor" }
    count: { type: "Int", defaultValue: 4 }
    orderby: { type: "OrderDirection", defaultValue: DESC }
  ) {
    exercises(
      after: $cursor
      first: $count
      orderBy: { direction: $orderby, field: ID }
    ) @connection(key: "ExercisesFragment_exercises") {
      edges {
        node {
          id
          ...ExerciseSelectItemFragment
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

type ExerciseSelectInputProps<T extends object> = SelectProps<T> & {
  queryRef: ExerciseSelectInputFragment$key;
};

function ExerciseSelectInput<T extends object>({
  queryRef,
  ...props
}: ExerciseSelectInputProps<T>) {
  const [isPending, startTransition] = useTransition();
  const { data, loadNext } = usePaginationFragment(
    ExerciseSelectInputFragment,
    queryRef,
  );

  const onLoadMore = useCallback(() => {
    startTransition(() => {
      loadNext(4);
    });
  }, [loadNext]);

  return (
    <Select
      label="Exercise"
      description="Please select an exercise"
      className="h-12"
      selectedKey={props.selectedKey}
      onSelectionChange={props.onSelectionChange}
      onBlur={props.onBlur}
      disabledKeys={
        props.disabledKeys
          ? [...props.disabledKeys, "loading", "loadmore"]
          : ["loading", "loadmore"]
      }
    >
      {data.exercises?.edges?.map((mg) => {
        if (mg?.node) {
          return <ExerciseSelectItem queryRef={mg.node} key={mg.node.id} />;
        }
      })}
      {isPending && (
        <ListBoxItem key="loading" id="loading" textValue="data is pending">
          <LoadingSpinner className="mx-auto w-6 h-6" />
        </ListBoxItem>
      )}
      <ListBoxItem key="loadmore" id="loadmore" textValue="load more data">
        <InfiniteScroll
          hasNextPage={data.exercises.pageInfo.hasNextPage}
          loadFn={onLoadMore}
        />
      </ListBoxItem>
    </Select>
  );
}

export { ExerciseSelectInput };
