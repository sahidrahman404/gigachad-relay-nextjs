import { useContext } from "react";
import {
  BodyWeightField,
  DurationField,
  WeightField,
} from "./RoutineExerciseSetFields";
import { RoutineExerciseSetContext } from "./RoutineExerciseSetsField";
import { getExerciseTypeFromExerciseSelectInputValue } from "./ExerciseSelectInput";
import { useFormContext } from "react-hook-form";
import { AddRoutineFormSchema } from "./AddRoutineForm";

function GetRoutineExerciseSetsField() {
  const { index } = useContext(RoutineExerciseSetContext);
  const form = useFormContext<AddRoutineFormSchema>();
  const exerciseSelectValue = form.watch().routineExercises[index].exerciseID;
  const exerciseType =
    getExerciseTypeFromExerciseSelectInputValue(exerciseSelectValue);
  console.log({ exerciseType, exerciseSelectValue });

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
