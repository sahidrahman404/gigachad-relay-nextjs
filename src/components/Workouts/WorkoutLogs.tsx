import { createContext } from "react";
import { GetWorkoutLogsSetsFields } from "./GetWorkoutLogsSetsFormFields";
import { useFieldArray, useFormContext } from "react-hook-form";
import { StartWorkoutFormSchema } from "./StartWorkoutForm";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { RestTimerSelector } from "../common/RestTimerSelector";
import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

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
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name={`workoutLogs.${index}.restTimer`}
                render={({ field }) => {
                  return (
                    <FormItem className="col-span-3">
                      <FormLabel>Rest Timer</FormLabel>
                      <RestTimerSelector
                        value={field.value}
                        onValueChange={field.onChange}
                      />
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
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
