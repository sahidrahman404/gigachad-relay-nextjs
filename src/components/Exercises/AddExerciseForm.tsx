import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useFragment, useMutation } from "react-relay";
import { graphql } from "relay-runtime";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ReactAriaUI/Button";
import { useForm } from "react-hook-form";
import {
  createUppy,
  imageFieldOnChange,
  uploadImageAndDoGqlMutation,
} from "@/lib/utils";
import { InternalMetadata } from "@uppy/core";
import { useCreateEditor } from "@/components/Hooks/useCreateEditor";
import { EditorField } from "@/components/Editor/Editor";
import { MusclesGroupInput } from "./MusclesGroupInput";
import { AddExerciseFormFragment$key } from "@/queries/__generated__/AddExerciseFormFragment.graphql";
import { AddExerciseForm_Mutation } from "@/queries/__generated__/AddExerciseForm_Mutation.graphql";
import { ExerciseTypeInput } from "./ExerciseTypeInput";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "../ui/use-toast";
import { ExerciseTypeID, MusclesGroupID, image } from "@/lib/zod";
import { ExercisesFragment } from "./Exercises";
import { ExercisesFragment$key } from "@/queries/__generated__/ExercisesFragment.graphql";
import ConnectionHandler from "relay-connection-handler-plus";

const ExerciseMutation = graphql`
  mutation AddExerciseForm_Mutation($input: CreateExerciseInput!) {
    createExercise(input: $input) {
      id
      name
      image {
        ...ImageFragment
      }
      howTo
    }
  }
`;

const ExerciseFormFragment = graphql`
  fragment AddExerciseFormFragment on Query {
    ...MusclesGroupInputFragment
    ...ExerciseTypeInputFragment
  }
`;

const formSchema = z.object({
  name: z.string().min(3),
  image: z.optional(image),
  musclesGroupID: MusclesGroupID,
  exerciseTypeID: ExerciseTypeID,
  howTo: z.string().optional(),
});

type ExerciseFormProps = {
  queryRef: AddExerciseFormFragment$key;
  exercisesFragmentQueryRef: ExercisesFragment$key;
};

function AddExerciseForm({
  queryRef,
  exercisesFragmentQueryRef,
}: ExerciseFormProps) {
  const data = useFragment(ExerciseFormFragment, queryRef);
  const dataExercisesFragment = useFragment(
    ExercisesFragment,
    exercisesFragmentQueryRef,
  );
  const [uppy] = useState(() => createUppy());
  const imageInputRef = useRef<null | HTMLInputElement>(null);
  const [commitMutation, isMutationInFlight] =
    useMutation<AddExerciseForm_Mutation>(ExerciseMutation);
  const [isUploadInFlight, setIsUploadInFlight] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      image: undefined,
      musclesGroupID: "",
      exerciseTypeID: "",
      howTo: "",
    },
  });

  const editor = useCreateEditor({
    description: form.getValues("howTo"),
    placeholder:
      "Enter a comprehensive step-by-step guide for correctly performing the exercise...",
    onChange: (val) => {
      form.setValue("howTo", val);
    },
  });

  function onSubmit(val: z.infer<typeof formSchema>) {
    const image = val.image;
    const mutation = (meta?: InternalMetadata & Record<string, unknown>) => {
      editor?.commands.clearContent();
      commitMutation({
        variables: {
          input: {
            name: val.name,
            musclesGroupIDs: [val.musclesGroupID],
            exerciseTypeIDs: [val.exerciseTypeID],
            howTo: val.howTo,
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
          },
        },
        updater: (store) => {
          const userRecord = store.get(dataExercisesFragment.id);
          const connectionRecords = ConnectionHandler.getConnections(
            userRecord!,
            "ExercisesFragment_exercises",
          );

          // Create a new local Comment record
          const id = `client:new_exercise:${crypto.randomUUID()}`;
          const newExerciseRecord = store.create(id, "Exercise");

          // Create new edge
          const newEdge = ConnectionHandler.createEdge(
            store,
            connectionRecords[0],
            newExerciseRecord,
            "ExerciseEdge" /* GraphQl Type for edge */,
          );

          connectionRecords.forEach((cR) => {
            ConnectionHandler.insertEdgeBefore(cR, newEdge);
          });
        },
        onError: (err) => {
          console.log({ err });
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
        className="grid grid-cols-4 gap-x-1 gap-y-2"
      >
        <Button
          type="submit"
          isDisabled={isMutationInFlight || isUploadInFlight}
          className="col-span-4 justify-self-end"
        >
          Submit
        </Button>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="col-span-2">
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
          name="musclesGroupID"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Muscles Group</FormLabel>
              <MusclesGroupInput
                queryRef={data}
                isInsideForm={true}
                onValueChange={field.onChange}
                value={field.value}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="exerciseTypeID"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Exercise Type</FormLabel>
              <ExerciseTypeInput
                queryRef={data}
                isInsideForm={true}
                onValueChange={field.onChange}
                value={field.value}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="howTo"
          render={() => (
            <FormItem className="col-span-full">
              <FormLabel>How To</FormLabel>
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

export { AddExerciseForm };
