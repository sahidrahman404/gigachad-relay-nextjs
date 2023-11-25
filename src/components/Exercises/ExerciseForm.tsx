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
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import {
  createUppy,
  imageFieldOnChange,
  imageZod,
  uploadImageAndDoGqlMutation,
} from "@/lib/utils";
import { ExerciseForm_Mutation } from "@/queries/__generated__/ExerciseForm_Mutation.graphql";
import { InternalMetadata } from "@uppy/core";
import { ExercisesFragment$key } from "@/queries/__generated__/ExercisesFragment.graphql";
import { ExercisesFragment } from "./Exercises";
import { useCreateEditor } from "../Hooks/useCreateEditor";
import { EditorField } from "../Editor/Editor";

const ExerciseMutation = graphql`
  mutation ExerciseForm_Mutation(
    $input: CreateExerciseInput!
    $connections: [ID!]!
  ) {
    createExercise(input: $input)
      @prependNode(connections: $connections, edgeTypeName: "ExerciseEdge") {
      id
      name
      image {
        ...ImageFragment
      }
      howTo
    }
  }
`;

const formSchema = z.object({
  name: z.string().min(3),
  howTo: z.string().min(3),
  image: imageZod,
});

type ExerciseForm = {
  queryRef: ExercisesFragment$key;
};

function ExerciseForm({ queryRef }: ExerciseForm) {
  const [uppy] = useState(() => createUppy());
  const data = useFragment(ExercisesFragment, queryRef);
  const imageInputRef = useRef<null | HTMLInputElement>(null);
  const [commitMutation, isMutationInFlight] =
    useMutation<ExerciseForm_Mutation>(ExerciseMutation);
  const [isUploadInFlight, setIsUploadInFlight] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      howTo: "",
      image: new File([], ""),
    },
  });

  const editor = useCreateEditor({
    description: form.getValues("howTo"),
    placeholder: "Add exercise instruction here...",
    onChange: (val) => {
      form.setValue("howTo", val);
    },
  });

  function onSubmit(val: z.infer<typeof formSchema>) {
    const connectionID = data.exercises.__id;
    const image = val.image;
    function mutation(meta: InternalMetadata & Record<string, unknown>) {
      editor?.commands.clearContent();
      commitMutation({
        variables: {
          input: {
            name: val.name,
            howTo: val.howTo,
            image: {
              layout: "constrained",
              objectFit: "cover",
              priority: false,
              filename: meta.name,
              width: (meta.width as number | undefined) ?? 0,
              aspectRatio: 1,
            },
          },
          connections: [connectionID],
        },
        onError: () => {},
        onCompleted: () => {},
      });
    }

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
        className="grid grid-cols-4 space-y-2 gap-x-1"
      >
        <div className="col-span-4 justify-self-end self-center">
          <Button disabled={isMutationInFlight || isUploadInFlight}>
            submit
          </Button>
        </div>

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
          name="howTo"
          render={() => (
            <FormItem className="col-span-4 md:col-span-3">
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

export { ExerciseForm };
