import { image } from "@/lib/zod";
import { FinishWorkoutFormFragment$key } from "@/queries/__generated__/FinishWorkoutFormFragment.graphql";
import { graphql } from "relay-runtime";
import { z } from "zod";
import { useToast } from "../ui/use-toast";
import { useStateMachine } from "little-state-machine";
import { updateStartWorkoutData } from "./StartWorkoutForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  createUppy,
  imageFieldOnChange,
  uploadImageAndDoGqlMutation,
} from "@/lib/utils";
import { useRef, useState } from "react";
import { EditorField } from "../Editor/Editor";
import { useCreateEditor } from "../Hooks/useCreateEditor";
import { useMutation } from "react-relay";
import { FinishWorkoutForm_Mutation } from "@/queries/__generated__/FinishWorkoutForm_Mutation.graphql";
import { InternalMetadata } from "@uppy/core";
import { ToastAction } from "../ui/toast";

const FinishWorkoutFormMutation = graphql`
  mutation FinishWorkoutForm_Mutation($input: CreateWorkoutWithChildrenInput!) {
    createWorkoutWithChildren(input: $input) {
      id
      workoutLogs {
        edges {
          node {
            sets {
              reps
              kg
              time
              km
            }
            workoutID
            exerciseID
          }
        }
      }
    }
  }
`;

const FinishWorkoutFormFragment = graphql`
  fragment FinishWorkoutFormFragment on Routine {
    id
  }
`;

const formSchema = z.object({
  image: image.optional(),
  description: z.string().optional(),
});

type FinishWorkoutFormSchema = z.infer<typeof formSchema>;
type FinishWorkoutFormProps = {
  queryRef: FinishWorkoutFormFragment$key;
};

function FinishWorkoutForm({ queryRef }: FinishWorkoutFormProps) {
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [commitMutation, isMutationInFlight] =
    useMutation<FinishWorkoutForm_Mutation>(FinishWorkoutFormMutation);
  const { toast } = useToast();
  const { state } = useStateMachine({ updateStartWorkoutData });
  const [uppy] = useState(() => createUppy());
  const [isUploadInFlight, setIsUploadInFlight] = useState(false);

  const form = useForm<FinishWorkoutFormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      image: undefined,
      description: "",
    },
  });

  const editor = useCreateEditor({
    description: form.getValues("description"),
    placeholder: "How did your workout go? leaves some notes here...",
    onChange: (val) => {
      form.setValue("description", val);
    },
  });

  function onSubmit(val: FinishWorkoutFormSchema) {
    const selectedWorkout = state.workout.workoutLogs
      .map((wl) => {
        const selectedSets = wl.sets.filter((set) => set.selected);
        if (selectedSets.length > 0) {
          return {
            sets: selectedSets.map((set) => ({
              kg: set.kg,
              time: set.time,
              km: set.km,
              reps: set.reps,
            })),
            exerciseID: wl.exerciseID,
          };
        }
        return {
          sets: [],
          exerciseID: "",
        };
      })
      .filter((wl) => wl.exerciseID !== "");
    const image = val.image;
    const mutation = (meta?: InternalMetadata & Record<string, unknown>) => {
      editor?.commands.clearContent();
      commitMutation({
        variables: {
          input: {
            duration: state.workout.duration,
            volume: state.workout.volume,
            sets: state.workout.sets,
            image: meta
              ? {
                  layout: "constrained",
                  objectFit: "cover",
                  priority: false,
                  filename: meta.name,
                  width: (meta.width as number | undefined) ?? 0,
                  aspectRatio: 1,
                }
              : null,
            description: val.description,
            workoutLogs: selectedWorkout,
          },
        },
        onError: (err) => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        },
        onCompleted: () => {},
      });
    };

    uploadImageAndDoGqlMutation({
      image: image,
      uppy: uppy,
      form: form,
      imageInputRef: imageInputRef,
      setIsUploadInFlight: setIsUploadInFlight,
      mutation: (meta) => {
        mutation(meta);
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
          disabled={isUploadInFlight || isMutationInFlight}
        >
          Submit
        </Button>

        <FormField
          name="image"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-full">
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={imageInputRef}
                  onChange={(e) => {
                    imageFieldOnChange({
                      event: e,
                      field: field,
                    });
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={() => (
            <FormItem className="col-span-4 md:col-span-3">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <EditorField editor={editor} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export { FinishWorkoutForm };
export type { FinishWorkoutFormSchema };
