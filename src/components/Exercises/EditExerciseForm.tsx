import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useRef, useState } from "react";
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
import { ExerciseTypeInput } from "./ExerciseTypeInput";
import { ExerciseTypeID, MusclesGroupID, image } from "@/lib/zod";
import { EditExerciseFormFragment$key } from "@/queries/__generated__/EditExerciseFormFragment.graphql";
import { EditExerciseForm_Mutation } from "@/queries/__generated__/EditExerciseForm_Mutation.graphql";
import { ExerciseFragment$key } from "@/queries/__generated__/ExerciseFragment.graphql";
import { ExerciseFragment } from "./Exercise";
import { Image } from "../Image/Image";
import { Avatar } from "../ui/avatar";
import { toast } from "sonner";

const EditExerciseMutation = graphql`
  mutation EditExerciseForm_Mutation($input: UpdateExerciseInput!) {
    updateExercise(input: $input) {
      ...ExerciseCardFragment
      ...ExerciseFragment
    }
  }
`;

const EditExerciseFormFragment = graphql`
  fragment EditExerciseFormFragment on Query {
    ...MusclesGroupInputFragment
    ...ExerciseTypeInputFragment
  }
`;

const formSchema = z.object({
  id: z.string().min(29),
  name: z.string().min(3),
  image: z.optional(image),
  musclesGroupID: MusclesGroupID,
  exerciseTypeID: ExerciseTypeID,
  howTo: z.string().optional(),
});

type EditExerciseFormProps = {
  queryRef: EditExerciseFormFragment$key;
  exerciseFragmentQueryRef: ExerciseFragment$key;
};

function EditExerciseForm({
  queryRef,
  exerciseFragmentQueryRef,
}: EditExerciseFormProps) {
  const data = useFragment(EditExerciseFormFragment, queryRef);
  const dataExerciseFragment = useFragment(
    ExerciseFragment,
    exerciseFragmentQueryRef,
  );
  const musclesGroups = dataExerciseFragment.musclesGroups.edges;
  const exerciseTypes = dataExerciseFragment.exerciseTypes.edges;

  const uppy = useMemo(() => createUppy(), []);
  const imageInputRef = useRef<null | HTMLInputElement>(null);
  const [commitMutation, isMutationInFlight] =
    useMutation<EditExerciseForm_Mutation>(EditExerciseMutation);
  const [isUploadInFlight, setIsUploadInFlight] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: dataExerciseFragment.id,
      name: dataExerciseFragment.name,
      image: undefined,
      musclesGroupID: musclesGroups
        ? musclesGroups[0]?.node
          ? musclesGroups[0].node.id
          : ""
        : "",
      exerciseTypeID: exerciseTypes
        ? exerciseTypes[0]?.node
          ? exerciseTypes[0].node.id
          : ""
        : "",
      howTo: dataExerciseFragment.howTo ?? "",
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
    console.log("render");
    const image = val.image;
    const mutation = (meta?: InternalMetadata & Record<string, unknown>) => {
      commitMutation({
        variables: {
          input: {
            id: val.id,
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
        onError: () => {
          toast.error("There was a problem with your request.");
        },
        onCompleted: () => {
          toast.success("The exercise was edited");
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
                <div className="flex gap-2 lg:gap-3">
                  {dataExerciseFragment.image ? (
                    <Avatar>
                      <Image image={dataExerciseFragment.image} />
                    </Avatar>
                  ) : null}
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
                </div>
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

export { EditExerciseForm };
