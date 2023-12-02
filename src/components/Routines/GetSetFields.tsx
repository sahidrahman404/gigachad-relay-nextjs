import { useContext } from "react";
import { BodyWeightField, DurationField, WeightField } from "./SetFormFields";
import { RoutineExerciseSetContext } from "./RoutineExerciseSet";
import { getExerciseTypeFromExerciseSelectInputValue } from "./ExerciseSelectInput";

function GetSetFields() {
  const { form, index } = useContext(RoutineExerciseSetContext);
  const exerciseSelectValue =
    form.getValues().routineExercises[index].exerciseID;
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

export { GetSetFields };
