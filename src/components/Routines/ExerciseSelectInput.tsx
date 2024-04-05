import { usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl } from "@/components/ui/form";
import { SelectProps } from "@radix-ui/react-select";
import { ExerciseSelectInputFragment$key } from "@/queries/__generated__/ExerciseSelectInputFragment.graphql";
import { useCallback, useTransition } from "react";
import { InfiniteScroll } from "../common/InfiniteScroll";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { ExerciseSelectItem } from "./ExerciseSelectItem";

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

type ExerciseSelectInputProps = SelectProps & {
  queryRef: ExerciseSelectInputFragment$key;
};

function ExerciseSelectInput({ queryRef, ...props }: ExerciseSelectInputProps) {
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
    <Select {...props}>
      <FormControl>
        <SelectTrigger className="h-12">
          <SelectValue className="h-12" placeholder="Select an exercise" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {data.exercises?.edges?.map((mg) => {
          if (mg?.node) {
            return <ExerciseSelectItem queryRef={mg.node} key={mg.node.id} />;
          }
        })}
        {isPending && <LoadingSpinner className="mx-auto w-6 h-6" />}
        <InfiniteScroll
          hasNextPage={data.exercises.pageInfo.hasNextPage}
          loadFn={onLoadMore}
        />
      </SelectContent>
    </Select>
  );
}

export { ExerciseSelectInput };
