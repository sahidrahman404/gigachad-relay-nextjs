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
import createUppy from "../Image/createUppy";
import { MusclesGroupFragment } from "./MusclesGroup";
import { MusclesGroupFragment$key } from "@/queries/__generated__/MusclesGroupFragment.graphql";

const MAX_FILE_SIZE = 30000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

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
  image: z
    .instanceof(File)
    .refine((f) => f !== null && f.size > 0, "Image is required.")
    .refine((f) => f.size <= MAX_FILE_SIZE, `Max file size is 30MB.`)
    .refine(
      (f) => ACCEPTED_IMAGE_TYPES.includes(f.type),
      "Only .jpg, .jpeg, .png and .webp formats are accepted."
    ),
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

    if (image !== null && image.size > 0) {
      const img = document.createElement("img");
      uppy.addFile({
        data: image,
        name: image.name,
        size: image.size,
        meta: {
          name: image.name,
          type: image.type,
        },
      });

      const objectURL = URL.createObjectURL(image);

      img.onload = function handleLoad() {
        uppy.setMeta({
          width: img.width,
          height: img.height,
        });
        URL.revokeObjectURL(objectURL);
      };

      img.src = objectURL;

      uppy.upload().then((res) => {
        const meta = res.successful[0].meta;
        form.reset();
        if (imageInputRef.current) {
          imageInputRef.current.value = "";
        }
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
      });
    }
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
                      const file = e.target.files
                        ? e.target.files[0]
                        : new File([], "");
                      field.onChange(file);
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
