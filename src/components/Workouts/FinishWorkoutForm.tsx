import { image } from "@/lib/zod";
import { graphql } from "relay-runtime";
import ConnectionHandler from "relay-connection-handler-plus";
import { z } from "zod";
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
import { useRouter } from "next/router";
import { useTimer } from "../Hooks/useTimer";
import { toast } from "sonner";
import {
  prependWorkoutEdge,
  prependWorkoutLogEdge,
} from "@/lib/relay/prependEdge";
import Head from "next/head";

const FinishWorkoutFormMutation = graphql`
  mutation FinishWorkoutForm_Mutation($input: CreateWorkoutWithChildrenInput!) {
    createWorkoutWithChildren(input: $input) {
      id
      ...LogCardFragment
      workoutLogs(orderBy: { direction: ASC, field: Order }) {
        edges {
          node {
            ...ExerciseHistoryCardFragment
            exercises {
              id
            }
          }
        }
      }
      users {
        id
      }
    }
  }
`;

const formSchema = z.object({
  name: z.string(),
  image: image.optional(),
  description: z.string().optional(),
});

type FinishWorkoutFormSchema = z.infer<typeof formSchema>;

function FinishWorkoutForm() {
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [commitMutation, isMutationInFlight] =
    useMutation<FinishWorkoutForm_Mutation>(FinishWorkoutFormMutation);
  const [uppy] = useState(() => createUppy());
  const [isUploadInFlight, setIsUploadInFlight] = useState(false);
  const workoutContext = WorkoutMachineContext.useSelector(
    (state) => state.context,
  );
  const workoutActor = WorkoutMachineContext.useActorRef();
  const router = useRouter();
  const { isTimerRunning } = useTimer();

  const form = useForm<FinishWorkoutFormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: workoutContext.name,
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
      commitMutation({
        variables: {
          input: {
            name: workoutContext.name,
            duration: workoutContext.duration.trim(),
            volume: workoutContext.createVolumeInput ?? 0,
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
          toast.error("There was a problem with your request.");
        },
        updater: (store, data) => {
          if (data) {
            const userRecord = store.get(
              data.createWorkoutWithChildren.users.id,
            );
            if (userRecord) {
              const connectionRecords = ConnectionHandler.getConnections(
                userRecord,
                "LogsFragment_workouts",
              );
              prependWorkoutEdge(store, connectionRecords);
            }
            for (const workoutLog of data.createWorkoutWithChildren.workoutLogs
              .edges ?? []) {
              const exerciseRecord = store.get(
                workoutLog?.node?.exercises.id ?? "",
              );
              if (exerciseRecord) {
                const connectionRecords = ConnectionHandler.getConnections(
                  exerciseRecord,
                  "ExercisesHistoryFragment_workoutLogs",
                );
                prependWorkoutLogEdge(store, connectionRecords);
              }
            }
          }
        },
        onCompleted: () => {
          editor?.commands.clearContent();
          workoutActor.send({ type: "RESET" });
          toast.success("Workout logs was added");
          router.push("/dashboard/logs");
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
        <Head>
          <title>{workoutContext.name} - Wellup</title>
          <meta
            property="og:title"
            content={`${workoutContext.name} - Wellup`}
            key="title"
          />
        </Head>
        <div className="col-span-4 md:col-start-2 md:col-span-2 grid grid-cols-2 gap-x-2">
          <Button
            type="button"
            isDisabled={isTimerRunning}
            variant="destructive"
            onPress={() => {
              workoutActor.send({ type: "RESET" });
              router.push("/dashboard/routines");
            }}
          >
            Discard
          </Button>
          <Button
            type="submit"
            isDisabled={isUploadInFlight || isMutationInFlight}
          >
            Submit
          </Button>
        </div>

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
