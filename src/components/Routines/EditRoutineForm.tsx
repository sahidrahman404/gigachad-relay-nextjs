import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, useForm } from "react-hook-form";

import { Button } from "../ReactAriaUI/Button";
import { graphql } from "relay-runtime";
import { useFragment, useMutation } from "react-relay";
import { toast } from "sonner";
import { useMemo, useState } from "react";
import {
  RoutineFormSchema,
  buildRoutineExercisesInput,
  buildRoutineRemindersInput,
  routineformSchema,
  unbuildRoutineExercisesInput,
  unbuildRoutineRemindersInput,
} from "@/lib/zod/routineFormSchema";
import { EditRoutineFormFragment$key } from "@/queries/__generated__/EditRoutineFormFragment.graphql";
import { useStartWorkoutFormFragment$key } from "@/queries/__generated__/useStartWorkoutFormFragment.graphql";
import { useStartWorkoutFormFragment } from "../Hooks/useStartWorkoutForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Reminders } from "./Reminders";
import { RoutineExerciseFieldArray } from "./RoutineExerciseFieldArray";
import { EditRoutineForm_Mutation } from "@/queries/__generated__/EditRoutineForm_Mutation.graphql";

const RoutineMutation = graphql`
  mutation EditRoutineForm_Mutation($input: UpdateRoutineWithChildrenInput!) {
    updateRoutineWithChildren(input: $input) {
      ...useStartWorkoutFormFragment
      ...RoutineFragment
    }
  }
`;

const EditRoutineFormFragment = graphql`
  fragment EditRoutineFormFragment on User {
    id
    ...RoutineExerciseFieldArrayFragment
  }
`;

type EditRoutineFormProps = {
  queryRef: EditRoutineFormFragment$key;
  routineQueryRef: useStartWorkoutFormFragment$key;
};

function EditRoutineForm({ queryRef, routineQueryRef }: EditRoutineFormProps) {
  const [commitMutation, isMutationInFlight] =
    useMutation<EditRoutineForm_Mutation>(RoutineMutation);
  const data = useFragment(EditRoutineFormFragment, queryRef);
  const routineData = useFragment(useStartWorkoutFormFragment, routineQueryRef);
  const reminders = useMemo(
    () =>
      unbuildRoutineRemindersInput({
        reminderID: routineData.reminderID,
        reminders: routineData.reminders,
      }),
    [routineData.reminderID, routineData.reminders],
  );
  const routineExercises = useMemo(
    () => unbuildRoutineExercisesInput(routineData.routineExercises),
    [routineData.routineExercises],
  );
  const form = useForm<RoutineFormSchema>({
    resolver: zodResolver(routineformSchema),
    mode: "onBlur",
    values: {
      name: routineData.name,
      reminders: reminders,
      routineExercises: routineExercises,
    },
  });
  const [sendReminder, setSendReminder] = useState(() => {
    if (
      routineData.reminderID &&
      routineData.reminders &&
      routineData.reminders.length > 0
    ) {
      return true;
    }
    return false;
  });

  function onSubmit(val: RoutineFormSchema) {
    const routineExercises = buildRoutineExercisesInput(val);
    const reminders = buildRoutineRemindersInput({ val, sendReminder });
    commitMutation({
      variables: {
        input: {
          id: routineData.id,
          name: val.name,
          reminders: {
            id: routineData.reminderID,
            reminders,
          },
          routineExercises: routineExercises,
        },
      },
      onError: () => {
        toast.error("There was a problem with your request");
      },
      onCompleted: () => {
        toast.success("The routine was updated");
      },
    });
  }

  function onError(errVal: FieldErrors<RoutineFormSchema>) {
    const routineExercisesErr = errVal.routineExercises;
    if (routineExercisesErr && routineExercisesErr?.root?.message) {
      toast.error(routineExercisesErr.root.message);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className="grid grid-cols-4 gap-y-3"
      >
        <Button
          type="submit"
          className="col-span-full justify-self-end"
          isDisabled={isMutationInFlight}
        >
          Submit
        </Button>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Reminders
          className="col-span-full"
          sendReminder={sendReminder}
          setSendReminder={setSendReminder}
        />
        <RoutineExerciseFieldArray queryRef={data} />
      </form>
    </Form>
  );
}

export { EditRoutineForm };
