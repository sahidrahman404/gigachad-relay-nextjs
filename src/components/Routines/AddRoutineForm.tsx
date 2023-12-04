import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useFieldArray, useForm } from "react-hook-form";
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
import { Button } from "../ui/button";
import {
  ExerciseSelectInput,
  getIDFromExerciseSelectInputValue,
} from "./ExerciseSelectInput";
import { graphql } from "relay-runtime";
import { useFragment, useMutation } from "react-relay";
import { Separator } from "@/components/ui/separator";
import { RoutineExerciseSet } from "./RoutineExerciseSet";
import { AddRoutineForm_Mutation } from "@/queries/__generated__/AddRoutineForm_Mutation.graphql";
import { AddRoutineFormFragment$key } from "@/queries/__generated__/AddRoutineFormFragment.graphql";

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
              time
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
    ...ExerciseSelectInputFragment
  }
`;

const addRoutineformSchema = z.object({
  name: z.string().min(3),
  routineExercises: z.array(
    z.object({
      sets: z.array(
        z.object({
          set: z.coerce.number().positive(),
          reps: z.coerce.number().positive().optional(),
          kg: z.coerce.number().positive().optional(),
          time: z.string().optional(),
          km: z.coerce.number().positive().optional(),
        }),
      ),
      restTimer: z.string().optional(),
      exerciseID: z.string().min(29),
    }),
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
      routineExercises: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "routineExercises",
    control: form.control,
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
      onCompleted(res, err) {
        console.log({ res, err });
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-4 gap-y-3"
      >
        <Button
          type="submit"
          className="col-span-4 justify-self-end"
          disabled={isMutationInFlight}
        >
          submit
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
        {fields.map((field, index) => {
          return (
            <FormField
              key={field.id}
              control={form.control}
              name={`routineExercises.${index}.exerciseID`}
              render={({ field }) => (
                <div className="col-span-4 space-y-2">
                  <div className="grid grid-cols-4 space-x-4">
                    <FormItem className="col-span-3">
                      <FormLabel>Exercise</FormLabel>
                      <ExerciseSelectInput
                        queryRef={data}
                        value={field.value}
                        onValueChange={field.onChange}
                      />
                      <FormMessage className="col-span-4 md:col-span-2" />
                    </FormItem>
                    <Button
                      className="self-end h-12"
                      variant="destructive"
                      onClick={(e) => {
                        e.preventDefault();
                        remove(index);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                  <RoutineExerciseSet form={form} index={index} />
                  <Separator />
                </div>
              )}
            />
          );
        })}
        <Button
          className="col-span-4 justify-self-center mt-4"
          variant="secondary"
          onClick={(e) => {
            e.preventDefault();
            append({
              exerciseID: "",
              sets: [],
            });
          }}
        >
          Add exercise
        </Button>
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
