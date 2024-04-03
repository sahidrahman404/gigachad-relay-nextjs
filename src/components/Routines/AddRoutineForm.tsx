import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, useForm } from "react-hook-form";
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
import { graphql } from "relay-runtime";
import ConnectionHandler from "relay-connection-handler-plus";
import { useFragment, useMutation } from "react-relay";
import { AddRoutineForm_Mutation } from "@/queries/__generated__/AddRoutineForm_Mutation.graphql";
import { AddRoutineFormFragment$key } from "@/queries/__generated__/AddRoutineFormFragment.graphql";
import { RoutineExerciseFieldArray } from "./RoutineExerciseFieldArray";
import { toast } from "sonner";
import { Reminders } from "./Reminders";
import { useState } from "react";
import { prependRoutineEdge } from "@/lib/relay/prependEdge";
import {
  RoutineFormSchema,
  buildRoutineExercisesInput,
  buildRoutineRemindersInput,
  routineformSchema,
} from "@/lib/zod/routineFormSchema";

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

type AddRoutineFormProps = {
  queryRef: AddRoutineFormFragment$key;
};

function AddRoutineForm({ queryRef }: AddRoutineFormProps) {
  const [commitMutation, isMutationInFlight] =
    useMutation<AddRoutineForm_Mutation>(RoutineMutation);
  const data = useFragment(AddRoutineFormFragment, queryRef);
  const form = useForm<RoutineFormSchema>({
    resolver: zodResolver(routineformSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      reminders: [],
      routineExercises: [],
    },
  });
  const [sendReminder, setSendReminder] = useState(false);

  function onSubmit(val: RoutineFormSchema) {
    const routineExercises = buildRoutineExercisesInput(val);
    const reminders = buildRoutineRemindersInput({ val, sendReminder });
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
        form.reset();
        setSendReminder(false);
        toast.success("The routine was added");
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

export { AddRoutineForm };
