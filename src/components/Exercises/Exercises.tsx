import { ExercisesFragment$key } from "@/queries/__generated__/ExercisesFragment.graphql";
import { useFragment, usePaginationFragment } from "react-relay";
import { OperationType, graphql } from "relay-runtime";
import { Exercise } from "./Exercise";
import { LinkButton } from "../ReactAriaUI/LinkButton";
import {
  ComponentProps,
  createContext,
  useCallback,
  useTransition,
} from "react";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { InfiniteScroll } from "../common/InfiniteScroll";
import { ExercisesParentFragment$key } from "@/queries/__generated__/ExercisesParentFragment.graphql";
import { ExercisesFilterSort } from "./ExercisesFilterSort";
import { ExercisesEmptyState } from "./ExercisesEmptyState";
import { useExercisesFilterSort } from "../Hooks/useExercisesFilterSort";

const ExercisesParentFragment = graphql`
  fragment ExercisesParentFragment on Query {
    viewer {
      ...ExercisesFragment
    }
    ...ExercisesFilterSortFragment
  }
`;

const ExercisesFragment = graphql`
  fragment ExercisesFragment on User
  @refetchable(queryName: "ExercisesFragmentPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "Cursor" }
    count: { type: "Int", defaultValue: 4 }
    orderby: { type: "OrderDirection", defaultValue: DESC }
    exerciseTypeWhereInput: {
      type: "[ExerciseTypeWhereInput!]"
      defaultValue: []
    }
    musclesGroupWhereInput: {
      type: "[MusclesGroupWhereInput!]"
      defaultValue: []
    }
  ) {
    id
    exercises(
      after: $cursor
      first: $count
      where: {
        hasExerciseTypesWith: $exerciseTypeWhereInput
        hasMusclesGroupsWith: $musclesGroupWhereInput
      }
      orderBy: { direction: $orderby, field: ID }
    ) @connection(key: "ExercisesFragment_exercises") {
      __id
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
  queryRef: ExercisesParentFragment$key;
};

const ExercisesData = createContext<ExercisesFragment$key | null>(null);

function Exercises({ queryRef, className }: ExercisesProps) {
  const [isPending, startTransition] = useTransition();
  const query = useFragment(ExercisesParentFragment, queryRef);
  const { data, loadNext, refetch } = usePaginationFragment<
    OperationType,
    ExercisesFragment$key
  >(ExercisesFragment, query.viewer);
  const [state, dispatch] = useExercisesFilterSort();

  const onLoadMore = useCallback(() => {
    startTransition(() => {
      loadNext(2);
    });
  }, [loadNext]);

  if (!data) {
    return null;
  }

  const exerciseEdges = data.exercises.edges;

  if (!exerciseEdges || exerciseEdges.length === 0) {
    return (
      <ExercisesEmptyState
        SlotExercisesFilterSort={
          <ExercisesFilterSort
            exercisesFilterSortFragmentQueryRef={query}
            startTransition={startTransition}
            refetch={refetch}
            state={state}
            dispatch={dispatch}
          />
        }
      />
    );
  }

  return (
    <ExercisesData.Provider value={query.viewer}>
      <div className="space-y-4">
        <div className="flex">
          <LinkButton className="ml-auto" href="/dashboard/exercises/add">
            Add Exercise
          </LinkButton>
        </div>
        <ExercisesFilterSort
          exercisesFilterSortFragmentQueryRef={query}
          startTransition={startTransition}
          refetch={refetch}
          state={state}
          dispatch={dispatch}
        />
        <div className={cn("", className)}>
          {exerciseEdges?.map((ex) => {
            if (ex?.node) {
              return (
                <Exercise
                  className="col-span-4 md:col-span-2 md:odd:justify-self-end md:even:justify-self-start"
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

export { Exercises, ExercisesData, ExercisesFragment };
