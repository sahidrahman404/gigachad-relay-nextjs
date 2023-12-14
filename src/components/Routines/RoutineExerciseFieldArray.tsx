import { useFieldArray, useFormContext } from "react-hook-form";
import { AddRoutineFormSchema } from "./AddRoutineForm";
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
import { RoutineExerciseSetsField } from "./RoutineExerciseSetsField";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { graphql } from "relay-runtime";
import { RoutineExerciseFieldArrayFragment$key } from "@/queries/__generated__/RoutineExerciseFieldArrayFragment.graphql";
import { useFragment } from "react-relay";
import { RestTimerSelector } from "../common/RestTimerSelector";

const RoutineExerciseFieldArrayFragment = graphql`
  fragment RoutineExerciseFieldArrayFragment on User {
    ...ExerciseSelectInputFragment
  }
`;

type RoutineExerciseFieldArrayProps = {
  queryRef: RoutineExerciseFieldArrayFragment$key;
};

function RoutineExerciseFieldArray({
  queryRef,
}: RoutineExerciseFieldArrayProps) {
  const data = useFragment(RoutineExerciseFieldArrayFragment, queryRef);
  const form = useFormContext<AddRoutineFormSchema>();
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
                        />
                        <FormMessage />
                      </FormItem>
                      <Button
                        className="self-end h-12"
                        variant="destructive"
                        onPress={() => {
                          remove(index);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`routineExercises.${index}.restTimer`}
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
              </CardContent>
              <CardFooter>
                <RoutineExerciseSetsField index={index} />
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
              restTimer: "0",
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
