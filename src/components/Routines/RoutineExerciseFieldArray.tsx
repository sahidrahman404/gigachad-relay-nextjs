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
            <FormField
              key={field.id}
              control={form.control}
              name={`routineExercises.${index}.exerciseID`}
              render={({ field }) => (
                <Card className="col-span-full">
                  <CardHeader>
                    <CardTitle>Exercise and Sets</CardTitle>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                  <CardFooter>
                    <RoutineExerciseSetsField index={index} />
                  </CardFooter>
                </Card>
              )}
            />
          );
        })}
      </div>

      <div className="mt-4 flex justify-center">
        <Button
          variant="secondary"
          onClick={(e) => {
            e.preventDefault();
            append({
              exerciseID: "",
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
