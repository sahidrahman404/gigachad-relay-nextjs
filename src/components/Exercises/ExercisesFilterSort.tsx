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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ReactAriaUI/Button";
import { Button as ButtonCn } from "../ui/button";
import { ArrowUpDown, Filter } from "lucide-react";
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
                value={state.musclesGroup}
                onValueChange={(value) => {
                  dispatch({ type: "set_muscles_group", payload: value });
                }}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username" className="text-right">
                Exercises Types
              </Label>
              <ExerciseTypeInput
                queryRef={dataExercisesFilterFragment}
                value={state.exerciseType}
                onValueChange={(value) => {
                  dispatch({ type: "set_exercise_type", payload: value });
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
              onPress={() => {
                startTransition(() => {
                  refetch(
                    {
                      orderby: `${state.orderDirection}`,
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <ButtonCn variant="outline">
            <ArrowUpDown className="mr-2 w-4 h-4" />
            Sort
          </ButtonCn>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Sort from</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={state.orderDirection}
            onValueChange={(value) => {
              dispatch({ type: "set_order_direction", payload: value });
            }}
          >
            <DropdownMenuRadioItem
              onClick={() => {
                startTransition(() => {
                  refetch({
                    orderby: "DESC",
                    exerciseTypeWhereInput:
                      state.exerciseType.length !== 29
                        ? []
                        : { id: state.exerciseType },
                    musclesGroupWhereInput:
                      state.musclesGroup.length !== 29
                        ? []
                        : { id: state.musclesGroup },
                  });
                });
              }}
              value="DESC"
            >
              Newest
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="ASC"
              onClick={() => {
                startTransition(() => {
                  refetch({
                    orderby: "ASC",
                    exerciseTypeWhereInput:
                      state.exerciseType.length !== 29
                        ? []
                        : { id: state.exerciseType },
                    musclesGroupWhereInput:
                      state.musclesGroup.length !== 29
                        ? []
                        : { id: state.musclesGroup },
                  });
                });
              }}
            >
              Oldest
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export { ExercisesFilterSort, ExercisesFilterSortFragment };
