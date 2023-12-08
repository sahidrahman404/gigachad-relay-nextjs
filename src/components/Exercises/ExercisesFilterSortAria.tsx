import { RefetchFnDynamic, graphql, useFragment } from "react-relay";
import { Dispatch, TransitionStartFunction } from "react";
import {
  Dialog,
  DialogTrigger,
  Heading,
  Label,
  Modal,
  ModalOverlay,
} from "react-aria-components";
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
import { ExerciseFragment$key } from "@/queries/__generated__/ExerciseFragment.graphql";
import { OperationType } from "relay-runtime";
import {
  ExercisesFilterSortActions,
  ExercisesFilterSortState,
} from "../Hooks/useExercisesFilterSort";
import { ExercisesFilterSortAriaFragment$key } from "@/queries/__generated__/ExercisesFilterSortAriaFragment.graphql";
import { MusclesGroupSelectInput } from "./MusclesGroupSelectInput";
import { ExerciseTypeInput } from "./ExerciseTypeInput";

const ExercisesFilterSortAriaFragment = graphql`
  fragment ExercisesFilterSortAriaFragment on Query {
    ...MusclesGroupSelectInputFragment
    ...ExerciseTypeInputFragment
  }
`;

type ExercisesFilterSortProps = {
  exercisesFilterSortFragmentQueryRef: ExercisesFilterSortAriaFragment$key;
  state: ExercisesFilterSortState;
  dispatch: Dispatch<ExercisesFilterSortActions>;
  startTransition: TransitionStartFunction;
  refetch: RefetchFnDynamic<OperationType, ExerciseFragment$key>;
};

function ExercisesFilterSortAria({
  exercisesFilterSortFragmentQueryRef,
  state,
  dispatch,
  startTransition,
  refetch,
}: ExercisesFilterSortProps) {
  const dataExercisesFilterFragment = useFragment(
    ExercisesFilterSortAriaFragment,
    exercisesFilterSortFragmentQueryRef,
  );

  return (
    <div className="space-x-4">
      <DialogTrigger>
        <Button variant="outline">
          <Filter className="mr-2 w-4 h-4 text-xs" />
          Filter
        </Button>
        <ModalOverlay
          className={({ isEntering, isExiting }) => `
          fixed inset-0 z-10 overflow-y-auto bg-black/25 flex min-h-full items-center justify-center p-4 text-center backdrop-blur
          ${isEntering ? "animate-in fade-in duration-300 ease-out" : ""}
          ${isExiting ? "animate-out fade-out duration-200 ease-in" : ""}
        `}
          isDismissable
        >
          <Modal
            className={({ isEntering, isExiting }) => `
            w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl
            ${isEntering ? "animate-in zoom-in-95 ease-out duration-300" : ""}
            ${isExiting ? "animate-out zoom-out-95 ease-in duration-200" : ""}
          `}
          >
            <Dialog className="sm:max-w-[425px]">
              <Heading slot="title">Filter Exercises</Heading>
              <div className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-right">
                    Muscles Groups
                  </Label>
                  <MusclesGroupSelectInput
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
            </Dialog>
          </Modal>
        </ModalOverlay>
      </DialogTrigger>
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

export { ExercisesFilterSortAria, ExercisesFilterSortAriaFragment };
