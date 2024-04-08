import { createContext } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { StartWorkoutFormSchema } from "./StartWorkoutForm";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { RestTimerSelector } from "../common/RestTimerSelector";
import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { GetWorkoutLogsSetsFields } from "./GetWorkoutLogsSetsFormFields";
import { WorkoutMachineContext } from "../Layout";
import { LinkButton } from "../ReactAriaUI/LinkButton";
import { Avatar } from "../ui/avatar";
import { Image } from "../Image/Image";

const WorkoutLogsContext = createContext<WorkoutLogsProps>(null!);

type WorkoutLogsProps = {
  index: number;
  exerciseType: string;
};

function WorkoutLogs() {
  const form = useFormContext<StartWorkoutFormSchema>();
  const workoutActor = WorkoutMachineContext.useActorRef();

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
              <CardTitle className="flex items-center">
                <Avatar className="w-10 h-10">
                  {field.image && <Image image={field.image} />}
                </Avatar>
                <LinkButton
                  variant="link"
                  href={`/dashboard/exercises/${field.exerciseID}`}
                >
                  {field.name}
                </LinkButton>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name={`workoutLogs.${index}.restTime`}
                render={({ field }) => {
                  return (
                    <FormItem className="col-span-3">
                      <FormLabel>Rest Timer</FormLabel>
                      <RestTimerSelector
                        value={field.value}
                        onValueChange={(val) => {
                          field.onChange(val);
                          workoutActor.send({
                            type: "SET_REST_TIMER",
                            value: {
                              workoutLogsIndex: index,
                              restTime: val,
                            },
                          });
                        }}
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
