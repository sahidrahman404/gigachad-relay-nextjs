import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, UseFormReturn, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ReactAriaUI/Button";
import { getIDFromExerciseSelectInputValue } from "./ExerciseSelectInput";
import { graphql } from "relay-runtime";
import ConnectionHandler from "relay-connection-handler-plus";
import { useFragment, useMutation } from "react-relay";
import {
  AddRoutineForm_Mutation,
  ReminderInput,
} from "@/queries/__generated__/AddRoutineForm_Mutation.graphql";
import { AddRoutineFormFragment$key } from "@/queries/__generated__/AddRoutineFormFragment.graphql";
import { checkDuplicate } from "@/lib/utils";
import { RoutineExerciseFieldArray } from "./RoutineExerciseFieldArray";
import { toast } from "sonner";
import { Reminders } from "./Reminders";
import { useState } from "react";
import { prependRoutineEdge } from "@/lib/relay/prependEdge";

const RoutineMutation = graphql`
  mutation AddRoutineForm_Mutation($input: CreateRoutineWithChildrenInput!) {
    createRoutineWithChildren(input: $input) {
      id
      routineExercises {
        edges {
          node {
            exerciseID
            sets {
              kg
              duration
              km
              reps
            }
          }
        }
      }
    }
  }
`;

const AddRoutineFormFragment = graphql`
  fragment AddRoutineFormFragment on User {
    id
    ...RoutineExerciseFieldArrayFragment
  }
`;

const addRoutineformSchema = z.object({
  name: z.string().min(3),
  reminders: z.array(
    z.object({
      day: z.coerce.number().refine((d) => d >= 0),
      time: z.string(),
    }),
  ),
  routineExercises: z
    .array(
      z.object({
        sets: z
          .array(
            z.object({
              reps: z.coerce.number().positive().optional(),
              kg: z.coerce.number().positive().optional(),
              duration: z.string().optional(),
              km: z.coerce.number().positive().optional(),
            }),
          )
          .refine((sets) => sets.length > 0, {
            message: "Exercise must have sets",
          }),
        restTime: z.string().optional(),
        exerciseID: z
          .string()
          .min(29, { message: "Exercise must be selected" }),
      }),
    )
    .refine(
      (routineExercises) => {
        const exerciseIDs = routineExercises.map((rE) => rE.exerciseID);
        return !checkDuplicate(exerciseIDs);
      },
      {
        message:
          "Cannot select the same exercise twice. Please choose a different exercise for each selection.",
      },
    ),
});

type AddRoutineFormProps = {
  queryRef: AddRoutineFormFragment$key;
};

type AddRoutineFormSchema = z.infer<typeof addRoutineformSchema>;
type AddRoutineFormReturn = UseFormReturn<AddRoutineFormSchema, any, undefined>;

function AddRoutineForm({ queryRef }: AddRoutineFormProps) {
  const [commitMutation, isMutationInFlight] =
    useMutation<AddRoutineForm_Mutation>(RoutineMutation);
  const data = useFragment(AddRoutineFormFragment, queryRef);
  const form = useForm<AddRoutineFormSchema>({
    resolver: zodResolver(addRoutineformSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      reminders: [],
      routineExercises: [],
    },
  });
  const [sendReminder, setSendReminder] = useState(false);

  function onSubmit(val: AddRoutineFormSchema) {
    form.reset();
    setSendReminder(false);
    const routineExercises = buildRoutineExercisesInputMutation(val);
    const reminders = buildRoutineRemindersInputMutation({ val, sendReminder });
    commitMutation({
      variables: {
        input: {
          name: val.name,
          reminders: reminders,
          routineExercises: routineExercises,
        },
      },

      updater: (store) => {
        const userRecord = store.get(data.id);
        const connectionRecords = ConnectionHandler.getConnections(
          userRecord!,
          "RoutinesFragment_routines",
        );
        prependRoutineEdge(store, connectionRecords);
      },
      onError: () => {
        toast.error("There was a problem with your request");
      },
      onCompleted: () => {
        toast.success("The routine was added");
      },
    });
  }

  function onError(errVal: FieldErrors<AddRoutineFormSchema>) {
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

function buildRoutineExercisesInputMutation(
  val: AddRoutineFormSchema,
): AddRoutineFormSchema["routineExercises"] {
  return val.routineExercises.map((rE) => {
    const exerciseID = getIDFromExerciseSelectInputValue(rE.exerciseID);
    return {
      ...rE,
      exerciseID: exerciseID,
    };
  });
}

type BuildRoutineRemindersInputMutationParams = {
  val: AddRoutineFormSchema;
  sendReminder: boolean;
};

function buildRoutineRemindersInputMutation({
  val,
  sendReminder,
}: BuildRoutineRemindersInputMutationParams): ReminderInput[] | null {
  if (sendReminder === true && val.reminders.length > 0) {
    return val.reminders.map((reminder) => {
      const date = new Date();
      const time = reminder.time.split(":");
      date.setHours(Number(time[0]));
      date.setMinutes(Number(time[1]));
      date.setSeconds(Number(time[2]));
      return {
        day: reminder.day,
        hour: date.getUTCHours(),
        minute: date.getUTCMinutes(),
        second: date.getUTCSeconds(),
      };
    });
  }
  return null;
}

export { AddRoutineForm, addRoutineformSchema };
export type { AddRoutineFormSchema, AddRoutineFormReturn };
