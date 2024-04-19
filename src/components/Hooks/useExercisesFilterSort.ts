import { useReducer } from "react";
import { Selection } from "react-aria-components";

type ExercisesFilterSortState = {
  open: boolean;
  musclesGroup: string;
  exerciseType: string;
  orderDirection: Selection;
  isLoading: boolean;
};

const exercisesFilterSortInitialState: ExercisesFilterSortState = {
  open: false,
  musclesGroup: "",
  exerciseType: "",
  orderDirection: new Set(["DESC"]),
  isLoading: false,
};

type SetOpen = {
  type: "set_open";
  payload: ExercisesFilterSortState["open"];
};

type SetMusclesGroup = {
  type: "set_muscles_group";
  payload: ExercisesFilterSortState["musclesGroup"];
};

type SetExerciseType = {
  type: "set_exercise_type";
  payload: ExercisesFilterSortState["exerciseType"];
};

type SetOrderDirection = {
  type: "set_order_direction";
  payload: ExercisesFilterSortState["orderDirection"];
};

type SetIsLoading = {
  type: "set_is_loading";
  payload: ExercisesFilterSortState["isLoading"];
};

type ExercisesFilterSortActions =
  | SetOpen
  | SetMusclesGroup
  | SetExerciseType
  | SetOrderDirection
  | SetIsLoading;

function exercisesFilterSortReducer(
  state: ExercisesFilterSortState,
  action: ExercisesFilterSortActions,
): ExercisesFilterSortState {
  switch (action.type) {
    case "set_open":
      return { ...state, open: action.payload };
    case "set_muscles_group":
      return { ...state, musclesGroup: action.payload };
    case "set_exercise_type":
      return { ...state, exerciseType: action.payload };
    case "set_order_direction":
      return { ...state, orderDirection: action.payload };
    case "set_is_loading":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

function useExercisesFilterSort() {
  const [state, dispatch] = useReducer(
    exercisesFilterSortReducer,
    exercisesFilterSortInitialState,
  );

  return [state, dispatch] as const;
}

export { useExercisesFilterSort };

export type { ExercisesFilterSortState, ExercisesFilterSortActions };
