import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-relay";
import z from "zod";
import {
  FormErrorMessage,
  GqlErrorStatus,
} from "../gql-helper/FormErrorMessage";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import AuthButton from "./AuthButton";
import { passwordResetToken_Mutation } from "@/queries/__generated__/passwordResetToken_Mutation.graphql";
import PasswordResetTokenMutation from "@/gql/passwordResetToken";
import Logo from "../common/Logo";
import Head from "next/head";

const formSchema = z.object({
  email: z.string().email(),
});

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [status, setStatus] = useState<GqlErrorStatus>({
    error: null,
    message: null,
    messages: null,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const [commitMutation, isMutationInFlight] =
    useMutation<passwordResetToken_Mutation>(PasswordResetTokenMutation);

  function onSubmit(val: z.infer<typeof formSchema>) {
    commitMutation({
      variables: {
        input: {
          email: val.email,
        },
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
        router.push(`/auth/reset`);
      },
    });
  }

  return (
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <Head>
        <title>Forgot Password - Gigachad</title>
        <meta
          property="og:title"
          content="Forgot Password - Gigachad"
          key="title"
        />
      </Head>
      <div>
        <Logo href="/" />
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Request forgot password token
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Please enter email address of your registration below{" "}
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
              <AuthButton isMutationInFlight={isMutationInFlight}>
                Submit
              </AuthButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
