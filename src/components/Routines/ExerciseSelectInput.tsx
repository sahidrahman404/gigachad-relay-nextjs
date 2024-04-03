import { usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl } from "@/components/ui/form";
import { SelectProps } from "@radix-ui/react-select";
import { Avatar } from "../ui/avatar";
import { Image } from "../Image/Image";
import { ExerciseSelectInputFragment$key } from "@/queries/__generated__/ExerciseSelectInputFragment.graphql";
import { useCallback, useTransition } from "react";
import { InfiniteScroll } from "../common/InfiniteScroll";
import { LoadingSpinner } from "../common/LoadingSpinner";

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
          name
          image {
            ...ImageFragment
          }
          exerciseTypes {
            edges {
              node {
                name
              }
            }
          }
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
          if (
            mg?.node &&
            mg.node.exerciseTypes &&
            mg.node.exerciseTypes.edges &&
            mg.node.exerciseTypes.edges[0]?.node
          ) {
            const value = buildExerciseSelectInputValue({
              id: mg.node.id,
              exerciseType: mg.node.exerciseTypes.edges[0].node.name,
            });
            return (
              <SelectItem key={mg.node.id} value={value}>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    {mg.node.image && <Image image={mg.node.image} />}
                  </Avatar>
                  <span>{mg.node.name}</span>
                </div>
              </SelectItem>
            );
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

type BuildExerciseSelectInputParams = { id: string; exerciseType: string };

function buildExerciseSelectInputValue({
  id,
  exerciseType,
}: BuildExerciseSelectInputParams): string {
  return `${id}-${exerciseType}`;
}

function getIDFromExerciseSelectInputValue(val: string): string {
  return val.split("-")[0];
}

function getExerciseTypeFromExerciseSelectInputValue(val: string): string {
  return val.split("-")[1];
}

export {
  ExerciseSelectInput,
  getIDFromExerciseSelectInputValue,
  getExerciseTypeFromExerciseSelectInputValue,
  buildExerciseSelectInputValue,
};
