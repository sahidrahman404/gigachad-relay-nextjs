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
import { AddRoutineForm_Mutation } from "@/queries/__generated__/AddRoutineForm_Mutation.graphql";
import { AddRoutineFormFragment$key } from "@/queries/__generated__/AddRoutineFormFragment.graphql";
import { checkDuplicate } from "@/lib/utils";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { RoutineExerciseFieldArray } from "./RoutineExerciseFieldArray";

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
  routineExercises: z
    .array(
      z.object({
        sets: z.array(
          z.object({
            reps: z.coerce.number().positive().optional(),
            kg: z.coerce.number().positive().optional(),
            duration: z.string().optional(),
            km: z.coerce.number().positive().optional(),
          }),
        ),
        restTimer: z.string().optional(),
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
  const { toast } = useToast();
  const data = useFragment(AddRoutineFormFragment, queryRef);
  const form = useForm<AddRoutineFormSchema>({
    resolver: zodResolver(addRoutineformSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      routineExercises: [],
    },
  });

  function onSubmit(val: AddRoutineFormSchema) {
    form.reset();
    const routineExercises = buildRoutineExercisesInputMutation(val);
    commitMutation({
      variables: {
        input: {
          name: val.name,
          routineExercises: routineExercises,
        },
      },

      updater: (store) => {
        const userRecord = store.get(data.id);
        const connectionRecords = ConnectionHandler.getConnections(
          userRecord!,
          "RoutinesFragment_routines",
        );

        // Create a new local Comment record
        const id = `client:new_routine:${crypto.randomUUID()}`;
        const newRoutineRecord = store.create(id, "Routine");

        // Create new edge
        const newEdge = ConnectionHandler.createEdge(
          store,
          connectionRecords[0],
          newRoutineRecord,
          "RoutineEdge" /* GraphQl Type for edge */,
        );

        connectionRecords.forEach((cR) => {
          ConnectionHandler.insertEdgeBefore(cR, newEdge);
        });
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      },
      onCompleted: () => {
        toast({
          variant: "default",
          title: "Success! Routine added",
          description: "The routine was added to your collection",
        });
      },
    });
  }

  function onError(errVal: FieldErrors<AddRoutineFormSchema>) {
    const routineExercisesErr = errVal.routineExercises;
    if (routineExercisesErr && routineExercisesErr?.root?.message) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: routineExercisesErr.root.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
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

export { AddRoutineForm, addRoutineformSchema };
export type { AddRoutineFormSchema, AddRoutineFormReturn };
