import { useFieldArray, useFormContext } from "react-hook-form";
import { FormField, FormItem, FormMessage } from "../ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ExerciseSelectInput } from "./ExerciseSelectInput";
import { Button } from "../ReactAriaUI/Button";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { graphql } from "relay-runtime";
import { RoutineExerciseFieldArrayFragment$key } from "@/queries/__generated__/RoutineExerciseFieldArrayFragment.graphql";
import { useFragment } from "react-relay";
import { RestTimerSelector } from "../common/RestTimerSelector";
import { RoutineFormSchema } from "@/lib/zod/routineFormSchema";
import { RoutineExerciseSetsField } from "./RoutineExerciseSetsField";
import { ExerciseSelectedInput } from "./ExerciseSelectedInput";
import { Trash2 } from "lucide-react";

const RoutineExerciseFieldArrayFragment = graphql`
  fragment RoutineExerciseFieldArrayFragment on User {
    ...ExerciseSelectInputFragment
    ...RoutineExerciseSetsFieldFragment
  }
`;

type RoutineExerciseFieldArrayProps = {
  queryRef: RoutineExerciseFieldArrayFragment$key;
};

function RoutineExerciseFieldArray({
  queryRef,
}: RoutineExerciseFieldArrayProps) {
  const data = useFragment(RoutineExerciseFieldArrayFragment, queryRef);
  const form = useFormContext<RoutineFormSchema>();
  const [parent] = useAutoAnimate();
  const { fields, append, remove } = useFieldArray({
    name: "routineExercises",
    control: form.control,
  });
  return (
    <div className="col-span-full">
      <div className="space-y-3" ref={parent}>
        {fields.map((field, index) => {
          return (
            <Card key={field.id} className="col-span-full">
              <CardHeader className="flex flex-row items-center">
                <CardTitle>Exercise and Sets</CardTitle>
                <Button
                  variant="destructive"
                  size="icon"
                  className="ml-auto"
                  onPress={() => {
                    remove(index);
                  }}
                >
                  <Trash2 />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name={`routineExercises.${index}.exerciseID`}
                  render={({ field }) => (
                    <div>
                      <FormItem>
                        {field.value !== "" ? (
                          <ExerciseSelectedInput value={field.value} />
                        ) : (
                          <ExerciseSelectInput
                            queryRef={data}
                            selectedKey={field.value}
                            onSelectionChange={field.onChange}
                            disabledKeys={fields.map(
                              (exercise) => exercise.exerciseID,
                            )}
                          />
                        )}
                        <FormMessage />
                      </FormItem>
                    </div>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`routineExercises.${index}.restTime`}
                  render={({ field }) => {
                    return (
                      <FormItem className="col-span-3">
                        <RestTimerSelector
                          selectedKey={field.value}
                          onSelectionChange={field.onChange}
                          onBlur={field.onBlur}
                        />
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </CardContent>
              <CardFooter>
                <RoutineExerciseSetsField index={index} queryRef={data} />
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <div className="mt-4 flex justify-center">
        <Button
          variant="secondary"
          onPress={() => {
            append({
              exerciseID: "",
              restTime: "0",
              sets: [],
            });
          }}
        >
          Add Exercise
        </Button>
      </div>
    </div>
  );
}

export { RoutineExerciseFieldArray };
