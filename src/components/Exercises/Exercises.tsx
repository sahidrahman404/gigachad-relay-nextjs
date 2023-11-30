import {
  ExercisesFragment$data,
  ExercisesFragment$key,
} from "@/queries/__generated__/ExercisesFragment.graphql";
import { usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { Exercise } from "./Exercise";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  ComponentProps,
  createContext,
  useCallback,
  useTransition,
} from "react";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { InfiniteScroll } from "../common/InfiniteScroll";

const ExercisesFragment = graphql`
  fragment ExercisesFragment on User
  @refetchable(queryName: "ExercisesFragmentPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "Cursor" }
    count: { type: "Int", defaultValue: 2 }
  ) {
    id
    ...DeleteExerciseDialogFragment
    exercises(after: $cursor, first: $count)
      @connection(key: "ExercisesFragment_exercises") {
      edges {
        node {
          id
          ...ExerciseFragment
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

type ExercisesProps = ComponentProps<"div"> & {
  queryRef: ExercisesFragment$key;
};

const ExercisesData = createContext<ExercisesFragment$data | null>(null);

function Exercises({ queryRef, className }: ExercisesProps) {
  const [isPending, startTransition] = useTransition();
  const { data, loadNext } = usePaginationFragment(ExercisesFragment, queryRef);

  const onLoadMore = useCallback(() => {
    startTransition(() => {
      loadNext(2);
    });
  }, [loadNext]);

  const exercises = data.exercises?.edges;
  const exerciseBaseCN = "col-span-4";
  const exerciseRegularCN =
    "md:col-span-2 md:odd:justify-self-start md:even:justify-self-end";

  // if (!exercises || exercises.length === 0) {
  //   return (
  //     <Button asChild>
  //       <Link href="/dashboard/exercises/add">Add Exercise</Link>
  //     </Button>
  //   );
  // }

  return (
    <ExercisesData.Provider value={data}>
      <div className="space-y-3">
        <div className={cn("space-y-5", className)}>
          <Button className="justify-self-end self-center col-span-4" asChild>
            <Link href="/dashboard/exercises/add">Add Exercise</Link>
          </Button>
          {exercises?.map((ex) => {
            if (ex?.node) {
              return (
                <Exercise
                  className={`${exerciseBaseCN} ${
                    exercises.length === 1 ? "md:w-full" : exerciseRegularCN
                  }`}
                  queryRef={ex.node}
                  key={ex.node.id}
                />
              );
            }
          })}
        </div>
        {isPending && <LoadingSpinner className="mx-auto w-6 h-6" />}
        <InfiniteScroll
          hasNextPage={data.exercises.pageInfo.hasNextPage}
          loadFn={onLoadMore}
        />
      </div>
    </ExercisesData.Provider>
  );
}

export { Exercises, ExercisesData };
