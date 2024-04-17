import { RefetchFnDynamic, graphql, useFragment } from "react-relay";
import { Dispatch, TransitionStartFunction } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";

import { Button } from "../ReactAriaUI/Button";
import { Filter } from "lucide-react";
import { ExerciseTypeInput } from "./ExerciseTypeInput";
import { Label } from "../ui/label";
import { MusclesGroupInput } from "./MusclesGroupInput";
import { ExercisesFilterSortFragment$key } from "@/queries/__generated__/ExercisesFilterSortFragment.graphql";
import { ExerciseFragment$key } from "@/queries/__generated__/ExerciseFragment.graphql";
import { OperationType } from "relay-runtime";
import {
  ExercisesFilterSortActions,
  ExercisesFilterSortState,
} from "../Hooks/useExercisesFilterSort";
import { ExerciseSort } from "./ExerciseSort";

const ExercisesFilterSortFragment = graphql`
  fragment ExercisesFilterSortFragment on Query {
    ...MusclesGroupInputFragment
    ...ExerciseTypeInputFragment
  }
`;

type ExercisesFilterSortProps = {
  exercisesFilterSortFragmentQueryRef: ExercisesFilterSortFragment$key;
  state: ExercisesFilterSortState;
  dispatch: Dispatch<ExercisesFilterSortActions>;
  startTransition: TransitionStartFunction;
  refetch: RefetchFnDynamic<OperationType, ExerciseFragment$key>;
};

function ExercisesFilterSort({
  exercisesFilterSortFragmentQueryRef,
  state,
  dispatch,
  startTransition,
  refetch,
}: ExercisesFilterSortProps) {
  const dataExercisesFilterFragment = useFragment(
    ExercisesFilterSortFragment,
    exercisesFilterSortFragmentQueryRef,
  );

  return (
    <div className="space-x-4">
      <Dialog
        open={state.open}
        onOpenChange={(open) => {
          dispatch({ type: "set_open", payload: open });
        }}
      >
        <DialogTrigger asChild>
          <Button variant="outline">
            <Filter className="mr-2 w-4 h-4 text-xs" />
            Filter
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Filter exercises</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-right">
                Muscles Groups
              </Label>
              <MusclesGroupInput
                queryRef={dataExercisesFilterFragment}
                selectedKey={state.musclesGroup}
                onSelectionChange={(key) => {
                  dispatch({
                    type: "set_muscles_group",
                    payload: typeof key === "string" ? key : "",
                  });
                }}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username" className="text-right">
                Exercises Types
              </Label>
              <ExerciseTypeInput
                queryRef={dataExercisesFilterFragment}
                selectedKey={state.exerciseType}
                onSelectionChange={(key) => {
                  dispatch({
                    type: "set_exercise_type",
                    payload: typeof key === "string" ? key : "",
                  });
                }}
              />
            </div>
            <Button
              variant="outline"
              onPress={() => {
                dispatch({ type: "set_muscles_group", payload: "" });
                dispatch({ type: "set_exercise_type", payload: "" });
              }}
            >
              Reset
            </Button>
          </div>
          <DialogFooter>
            <Button
              isDisabled={state.isLoading}
              onPress={() => {
                startTransition(() => {
                  dispatch({ type: "set_is_loading", payload: true });
                  refetch(
                    {
                      orderby: `${Object.entries(state.orderDirection.valueOf())[1][1]}`,
                      exerciseTypeWhereInput:
                        state.exerciseType.length !== 29
                          ? []
                          : { id: state.exerciseType },
                      musclesGroupWhereInput:
                        state.musclesGroup.length !== 29
                          ? []
                          : { id: state.musclesGroup },
                    },
                    {
                      onComplete: () => {
                        dispatch({ type: "set_is_loading", payload: false });
                        dispatch({ type: "set_open", payload: false });
                      },
                    },
                  );
                });
              }}
            >
              Filter
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <ExerciseSort
        state={state}
        refetch={refetch}
        dispatch={dispatch}
        startTransition={startTransition}
      />
    </div>
  );
}

export { ExercisesFilterSort, ExercisesFilterSortFragment };

export type { ExercisesFilterSortProps };
