import { useContext } from "react";
import { WorkoutLogsContext } from "./WorkoutLogs";
import {
  BodyWeightField,
  DurationField,
  WeightField,
} from "./WorkoutLogsSetsFormFields";

function GetWorkoutLogsSetsFields() {
  const { exerciseType } = useContext(WorkoutLogsContext);

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

export { GetWorkoutLogsSetsFields };
