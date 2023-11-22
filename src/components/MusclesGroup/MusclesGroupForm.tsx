import { MusclesGroupForm_Mutation } from "@/queries/__generated__/MusclesGroupForm_Mutation.graphql";
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
  imageZod,
  uploadImageAndDoGqlMutation,
  imageFieldOnChange,
} from "../Image/createUppy";
import { MusclesGroupFragment } from "./MusclesGroup";
import { MusclesGroupFragment$key } from "@/queries/__generated__/MusclesGroupFragment.graphql";
import { InternalMetadata } from "@uppy/core";

const MusclesGroupMutation = graphql`
  mutation MusclesGroupForm_Mutation(
    $input: CreateMusclesGroupInput!
    $connections: [ID!]!
  ) {
    CreateMusclesGroup(input: $input)
      @prependNode(connections: $connections, edgeTypeName: "ExerciseEdge") {
      id
      name
      image {
        ...ImageFragment
      }
    }
  }
`;

const formSchema = z.object({
  name: z.string(),
  image: imageZod,
});

type MusclesGroupForm = {
  queryRef: MusclesGroupFragment$key;
};

export default function MusclesGroupForm({ queryRef }: MusclesGroupForm) {
  const [uppy] = useState(() => createUppy());
  const data = useFragment(MusclesGroupFragment, queryRef);
  const imageInputRef = useRef<null | HTMLInputElement>(null);
  const [commitMutation, isMutationInFlight] =
    useMutation<MusclesGroupForm_Mutation>(MusclesGroupMutation);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      image: new File([], ""),
    },
  });

  function onSubmit(val: z.infer<typeof formSchema>) {
    const connectionID = data.musclesGroups.__id;
    const image = val.image;

    function mutation(meta: InternalMetadata & Record<string, unknown>) {
      commitMutation({
        variables: {
          input: {
            image: {
              layout: "fixed",
              objectFit: "cover",
              priority: false,
              filename: meta.name,
              width: (meta.width as number | undefined) ?? 0,
              aspectRatio: 1,
            },
            name: val.name,
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
      mutation: (meta) => {
        mutation(meta);
      },
    });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
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
              <FormItem>
                <FormLabel>Picture</FormLabel>
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
          <Button disabled={isMutationInFlight}>submit</Button>
        </form>
      </Form>
    </>
  );
}
