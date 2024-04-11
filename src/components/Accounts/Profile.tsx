import { ProfileFragment$key } from "@/queries/__generated__/ProfileFragment.graphql";
import { useFragment, useMutation } from "react-relay";
import { graphql } from "relay-runtime";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ReactAriaUI/Button";
import { Profile_Mutation } from "@/queries/__generated__/Profile_Mutation.graphql";
import { toast } from "sonner";

const ProfileMutation = graphql`
  mutation Profile_Mutation($input: UpdateUserProfileInput!) {
    updateUserProfile(input: $input) {
      ...ProfileFragment
    }
  }
`;

const ProfileFragment = graphql`
  fragment ProfileFragment on User {
    name
    unit
  }
`;

const profileSchema = z.object({
  name: z.string().min(3),
  unit: z.enum(["METRIC", "IMPERIAL"]),
});

function Profile({ queryRef }: { queryRef: ProfileFragment$key }) {
  const data = useFragment(ProfileFragment, queryRef);

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    mode: "onBlur",
    values: {
      name: data.name,
      //@ts-ignore
      unit: data.unit,
    },
  });

  const [commitMutation, isMutationInFlight] =
    useMutation<Profile_Mutation>(ProfileMutation);
  function onSubmit(val: z.infer<typeof profileSchema>) {
    commitMutation({
      variables: {
        input: {
          name: val.name,
          unit: val.unit,
        },
      },
      onError: () => {
        toast.error("There was a problem with your request.");
      },
      onCompleted: () => {
        toast.success("Your profile was changed");
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="smith" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="unit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="METRIC" />
                    </FormControl>
                    <FormLabel className="font-normal">Metric</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="IMPERIAL" />
                    </FormControl>
                    <FormLabel className="font-normal">Imperial</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex">
          <Button
            type="submit"
            isDisabled={
              isMutationInFlight
                ? true
                : form.getValues("name") !== data.name ||
                    form.getValues("unit") !== data.unit
                  ? false
                  : true
            }
            className="ml-auto"
          >
            Edit
          </Button>
        </div>
      </form>
    </Form>
  );
}

export { Profile };
