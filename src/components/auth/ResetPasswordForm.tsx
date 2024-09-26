import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-relay";
import { z } from "zod";
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
import { ShowPasswordCheckBox } from "./ShowPasswordCheckBox";
import { resetPassword_Mutation } from "@/queries/__generated__/resetPassword_Mutation.graphql";
import ResetPasswordMutation from "@/gql/resetPassword";
import Link from "next/link";
import Logo from "../common/Logo";
import { removeTokenAndRedirect } from "@/lib/utils";
import { toast } from "sonner";
import Head from "next/head";

const formSchema = z
  .object({
    token: z.string().min(26).max(26),
    password: z.string().min(8).max(72),
    confirmPassword: z.string().min(8).max(72),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<GqlErrorStatus>({
    error: null,
    message: null,
    messages: null,
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      token: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [commitMutation, isMutationInFlight] =
    useMutation<resetPassword_Mutation>(ResetPasswordMutation);
  function onSubmit(val: z.infer<typeof formSchema>) {
    commitMutation({
      variables: {
        input: {
          tokenPlainText: val.token,
          password: val.password,
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
        toast.success("Your account password was changed.");
        window.setTimeout(() => {
          removeTokenAndRedirect().then(() => {});
        }, 1500);
      },
    });
  }

  return (
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <Head>
        <title>Reset Password - Wellup</title>
        <meta
          property="og:title"
          content="Reset Password - Wellup"
          key="title"
        />
      </Head>
      <div>
        <Logo href="/" />
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Reset your password
        </h2>
      </div>

      <div className="mt-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="token"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Token</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="y0ur5tr0n9p@5sw0rd"
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="y0ur5tr0n9p@5sw0rd"
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <ShowPasswordCheckBox {...{ showPassword, setShowPassword }} />
              <div className="text-sm leading-6">
                <Link
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                  href={`/auth/forgot`}
                >
                  Didn&apos;t receive token?
                </Link>
              </div>
            </div>
            <FormErrorMessage status={status} />
            <div>
              <AuthButton isMutationInFlight={isMutationInFlight}>
                Reset
              </AuthButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
