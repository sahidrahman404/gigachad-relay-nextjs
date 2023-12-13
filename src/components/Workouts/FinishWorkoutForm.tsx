import { image } from "@/lib/zod";
import { graphql } from "relay-runtime";
import { z } from "zod";
import { useToast } from "../ui/use-toast";
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
import { Button } from "../ReactAriaUI/Button";
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
import { WorkoutMachineContext } from "../Layout";
import { ToastAction } from "../ui/toast";
import { useRouter } from "next/router";

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
              duration
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

const formSchema = z.object({
  image: image.optional(),
  description: z.string().optional(),
});

type FinishWorkoutFormSchema = z.infer<typeof formSchema>;

function FinishWorkoutForm() {
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [commitMutation, isMutationInFlight] =
    useMutation<FinishWorkoutForm_Mutation>(FinishWorkoutFormMutation);
  const { toast } = useToast();
  const [uppy] = useState(() => createUppy());
  const [isUploadInFlight, setIsUploadInFlight] = useState(false);
  const workoutContext = WorkoutMachineContext.useSelector(
    (state) => state.context,
  );
  const workoutActor = WorkoutMachineContext.useActorRef();
  const router = useRouter();

  const form = useForm<FinishWorkoutFormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      image: workoutContext.image,
      description: workoutContext.description,
    },
  });

  const editor = useCreateEditor({
    description: form.getValues("description"),
    placeholder: "How did your workout go? leaves some notes here...",
    onChange: (val) => {
      form.setValue("description", val);
      workoutActor.send({
        type: "SET_WORKOUT_DESCRIPTION",
        value: {
          description: val,
        },
      });
    },
  });

  function onSubmit() {
    const image = workoutContext.image;
    const mutation = (meta?: InternalMetadata & Record<string, unknown>) => {
      editor?.commands.clearContent();
      commitMutation({
        variables: {
          input: {
            duration: workoutContext.duration,
            volume: workoutContext.volume,
            sets: workoutContext.sets,
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
            description: workoutContext.description,
            workoutLogs: workoutContext.createWorkoutLogsInput,
          },
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
          workoutActor.send({ type: "RESET" });
          router.push("/dashboard/routines");
        },
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
          isDisabled={isUploadInFlight || isMutationInFlight}
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
                    const files = e.target.files;
                    imageFieldOnChange({
                      event: e,
                      field: field,
                    });
                    workoutActor.send({
                      type: "SET_WORKOUT_IMAGE",
                      value: {
                        image: files && files[0] ? files[0] : undefined,
                      },
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
            <FormItem className="col-span-4">
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
