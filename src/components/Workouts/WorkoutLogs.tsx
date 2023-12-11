import { createContext } from "react";
import { GetWorkoutLogsSetsFields } from "./GetWorkoutLogsSetsFormFields";
import { useFieldArray, useFormContext } from "react-hook-form";
import { StartWorkoutFormSchema } from "./StartWorkoutForm";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const WorkoutLogsContext = createContext<WorkoutLogsProps>(null!);

type WorkoutLogsProps = {
  index: number;
  exerciseType: string;
};

function WorkoutLogs() {
  const form = useFormContext<StartWorkoutFormSchema>();

  const { fields } = useFieldArray({
    name: "workoutLogs",
    control: form.control,
  });
  return (
    <div className="col-span-full space-y-4">
      {fields.map((field, index) => {
        return (
          <Card key={field.id}>
            <CardHeader>
              <CardTitle>{field.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <WorkoutLogsContext.Provider
                value={{ index, exerciseType: field.exerciseType }}
              >
                <GetWorkoutLogsSetsFields />
              </WorkoutLogsContext.Provider>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export { WorkoutLogs, WorkoutLogsContext };
export type { WorkoutLogsProps };
