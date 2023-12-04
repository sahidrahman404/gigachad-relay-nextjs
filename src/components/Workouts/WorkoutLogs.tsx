import { createContext } from "react";
import { GetWorkoutLogsSetsFields } from "./GetWorkoutLogsSetsFormFields";

const WorkoutLogsContext = createContext<WorkoutLogsProps>(null!);

type WorkoutLogsProps = {
  index: number;
  exerciseType: string;
};

function WorkoutLogs({ index, exerciseType }: WorkoutLogsProps) {
  return (
    <WorkoutLogsContext.Provider value={{ index, exerciseType }}>
      <GetWorkoutLogsSetsFields />
    </WorkoutLogsContext.Provider>
  );
}

export { WorkoutLogs, WorkoutLogsContext };
export type { WorkoutLogsProps };
