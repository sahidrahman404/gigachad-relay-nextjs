import { usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { Select, SelectItem } from "../ReactAriaUI/MySelect";
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
      placeholder="Please select an exercise"
      selectedKey={props.selectedKey}
      onSelectionChange={props.onSelectionChange}
      onBlur={props.onBlur}
      disabledKeys={
        props.disabledKeys
          ? [...props.disabledKeys, "loading", "loadmore"]
          : ["loading", "loadmore"]
      }
      size="md"
    >
      {data.exercises?.edges?.map((mg) => {
        if (mg?.node) {
          return <ExerciseSelectItem queryRef={mg.node} key={mg.node.id} />;
        }
      })}
      {isPending && (
        <SelectItem key="loading" id="loading" textValue="data is pending">
          <LoadingSpinner className="mx-auto w-6 h-6" />
        </SelectItem>
      )}
      <SelectItem key="loadmore" id="loadmore" textValue="load more data">
        <InfiniteScroll
          hasNextPage={data.exercises.pageInfo.hasNextPage}
          loadFn={onLoadMore}
        />
      </SelectItem>
    </Select>
  );
}

export { ExerciseSelectInput };
