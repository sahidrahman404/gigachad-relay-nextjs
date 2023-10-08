import UserMutation from "@/gql/user";
import { user_Mutation } from "@/queries/__generated__/user_Mutation.graphql";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-relay";
import { z } from "zod";
import { FormErrorMessage, GqlErrorStatus } from "../gql-helper/FormErrorMessage";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import AuthButton from "./AuthButton";
import { ShowPasswordCheckBox } from "./ShowPasswordCheckBox";
import { resetPassword_Mutation } from "@/queries/__generated__/resetPassword_Mutation.graphql";
import ResetPasswordMutation from "@/gql/resetPassword";
import Link from "next/link";


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
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [status, setStatus] = useState<GqlErrorStatus>({
    error: null,
    message: null,
    messages: null
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      token: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [commitMutation, isMutationInFlight] = useMutation<resetPassword_Mutation>(ResetPasswordMutation);
  function onSubmit(val: z.infer<typeof formSchema>) {
    commitMutation({
      variables: {
        input: {
          tokenPlainText: val.token,
          password: val.password,
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
      onCompleted: (res, err) => {
        if (err) {
          setStatus((status) => ({
            ...status,
            error: true,
            message: null,
            messages: err,
          }));
          return
        }
        router.push(`/auth/signin`);
      },
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
              <AuthButton isMutationInFlight={isMutationInFlight}>Sign up</AuthButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
