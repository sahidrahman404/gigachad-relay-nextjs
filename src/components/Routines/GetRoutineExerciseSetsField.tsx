import { useContext } from "react";
import {
  BodyWeightField,
  DurationField,
  WeightField,
} from "./RoutineExerciseSetFields";
import { RoutineExerciseSetContext } from "./RoutineExerciseSetsField";
import { getExerciseTypeFromExerciseSelectInputValue } from "./ExerciseSelectInput";
import { useFormContext } from "react-hook-form";
import { RoutineFormSchema } from "@/lib/zod/routineFormSchema";
import { useWatch } from "react-hook-form";

function GetRoutineExerciseSetsField() {
  const { index } = useContext(RoutineExerciseSetContext);
  const form = useFormContext<RoutineFormSchema>();
  const exerciseSelectValue = useWatch({
    control: form.control,
    name: `routineExercises.${index}.exerciseID`,
  });
  const exerciseType =
    getExerciseTypeFromExerciseSelectInputValue(exerciseSelectValue);

  if (exerciseType === "Bodyweight") {
    return <BodyWeightField />;
  }

  if (exerciseType === "Weight") {
    return <WeightField />;
  }

  if (exerciseType === "Weighted Bodyweight") {
    return <WeightField />;
  }

  if (exerciseType === "Duration") {
    return <DurationField />;
  }
}

export { GetRoutineExerciseSetsField };
