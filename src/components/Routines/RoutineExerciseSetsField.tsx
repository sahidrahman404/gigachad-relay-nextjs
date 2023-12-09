import { createContext } from "react";
import { GetRoutineExerciseSetsField } from "./GetRoutineExerciseSetsField";

const RoutineExerciseSetContext = createContext<
  Omit<RoutineExerciseSetProps, "exerciseType">
>(null!);

type RoutineExerciseSetProps = {
  index: number;
};

function RoutineExerciseSetsField({ index }: RoutineExerciseSetProps) {
  return (
    <RoutineExerciseSetContext.Provider value={{ index }}>
      <GetRoutineExerciseSetsField />
    </RoutineExerciseSetContext.Provider>
  );
}

export { RoutineExerciseSetsField, RoutineExerciseSetContext };
export type { RoutineExerciseSetProps };
