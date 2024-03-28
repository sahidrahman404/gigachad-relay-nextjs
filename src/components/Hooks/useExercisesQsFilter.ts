import { ExercisesFragment$key } from "@/queries/__generated__/ExercisesFragment.graphql";
import { useRouter } from "next/router";
import { Dispatch, TransitionStartFunction, useEffect } from "react";
import { RefetchFnDynamic } from "react-relay";
import { OperationType } from "relay-runtime";
import { ExercisesFilterSortActions } from "./useExercisesFilterSort";

type UseExercisesQsFilter = {
  startTransition: TransitionStartFunction;
  refetch: RefetchFnDynamic<OperationType, ExercisesFragment$key | null>;
  dispatch: Dispatch<ExercisesFilterSortActions>;
};

function useExercisesQsFilter({
  startTransition,
  refetch,
  dispatch,
}: UseExercisesQsFilter) {
  const router = useRouter();
  const musclesGroupID = router.query["mg"];
  const exerciseTypeID = router.query["et"];
  useEffect(() => {
    const isExerciseTypeFilter = typeof exerciseTypeID === "string";
    const isMusclesGroupFilter = typeof musclesGroupID === "string";
    if (isExerciseTypeFilter || isMusclesGroupFilter) {
      dispatch({ type: "set_exercise_type", payload: "" });
      dispatch({ type: "set_muscles_group", payload: "" });
      startTransition(() => {
        refetch({
          orderby: "DESC",
          exerciseTypeWhereInput: !isExerciseTypeFilter
            ? []
            : { id: exerciseTypeID },
          musclesGroupWhereInput: !isMusclesGroupFilter
            ? []
            : { id: musclesGroupID },
        });
      });
      router.replace("/dashboard/exercises", undefined, { shallow: true });
    }

    if (isExerciseTypeFilter) {
      dispatch({ type: "set_exercise_type", payload: exerciseTypeID });
    }
    if (isMusclesGroupFilter) {
      dispatch({ type: "set_muscles_group", payload: musclesGroupID });
    }
  }, [musclesGroupID, exerciseTypeID]);
}

export { useExercisesQsFilter };
