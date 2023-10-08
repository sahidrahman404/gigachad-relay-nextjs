import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-relay";
import z from "zod";
import { FormErrorMessage, GqlErrorStatus } from "../gql-helper/FormErrorMessage";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import AuthButton from "./AuthButton";
import { resendToken_Mutation } from "@/queries/__generated__/resendToken_Mutation.graphql";
import ResendTokenMutation from "@/gql/resendToken";

const formSchema = z.object({
  email: z.string().email(),
});

export default function ResendTokenForm() {
  const router = useRouter()
  const [status, setStatus] = useState<GqlErrorStatus>({
    error: null,
    message: null,
    messages: null
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const [commitMutation, isMutationInFlight] = useMutation<resendToken_Mutation>(ResendTokenMutation);

  function onSubmit(val: z.infer<typeof formSchema>) {
    commitMutation({
      variables: {
        input: {
          email: val.email
        }
      },
      onError: (err) => {
        setStatus((status) => ({
          ...status,
          error: true,
          message: err.message,
          messages: null,
        }));
      },
      onCompleted: (_, err) => {
        if (err) {
          setStatus((status) => ({
            ...status,
            error: true,
            message: null,
            messages: err,
          }));
          return;
        }
        router.push(`/auth/verify`);
      }
    })
  }

  return (
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <img
          className="h-10 w-auto"
          src="/logo.svg"
          alt="gigachad"
        />
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Request new token
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Please enter email address of your registration below{' '}
        </p>
      </div>

      <div className="mt-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormErrorMessage status={status} />

            <div>
              <AuthButton isMutationInFlight={isMutationInFlight}>Resend</AuthButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
