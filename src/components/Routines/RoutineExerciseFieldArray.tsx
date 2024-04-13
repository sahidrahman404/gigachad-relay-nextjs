import { useFieldArray, useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
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
              <CardHeader>
                <CardTitle>Exercise and Sets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name={`routineExercises.${index}.exerciseID`}
                  render={({ field }) => (
                    <div className="grid grid-cols-4 space-x-2 md:space-x-4">
                      <FormItem className="col-span-3">
                        <FormLabel>Exercise</FormLabel>
                        <ExerciseSelectInput
                          queryRef={data}
                          value={field.value}
                          onValueChange={field.onChange}
                          disabled={field.value.length > 0 ? true : false}
                        />
                        <FormMessage />
                      </FormItem>

                      <div className="space-y-2">
                        <div className="h-6" />
                        <Button
                          className="h-12 w-full"
                          variant="destructive"
                          onPress={() => {
                            remove(index);
                          }}
                        >
                          Delete
                        </Button>
                        <div className="h-[0.8rem]" />
                      </div>
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
