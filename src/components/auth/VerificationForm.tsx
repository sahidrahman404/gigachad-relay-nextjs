import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-relay";
import z from "zod";
import { FormErrorMessage, GqlErrorStatus } from "../gql-helper/FormErrorMessage";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import AuthButton from "./AuthButton";
import { activateUser_Mutation } from "@/queries/__generated__/activateUser_Mutation.graphql";
import ActivateUserMutation from "@/gql/activateUser";
import Logo from "../common/Logo";
import setTokenAndRedirect from "./setTokenAndRedirect";
import { useRouter } from "next/router";

const formSchema = z.object({
  token: z.string().min(26).max(26),
});

export default function VerificationForm() {
  const router = useRouter()
  const [status, setStatus] = useState<GqlErrorStatus>({
    error: null,
    message: null,
    messages: null
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      token: "",
    },
  });

  const [commitMutation, isMutationInFlight] = useMutation<activateUser_Mutation>(ActivateUserMutation);

  function onSubmit(val: z.infer<typeof formSchema>) {
    commitMutation({
      variables: {
        input: {
          tokenPlainText: val.token
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
          return;
        }
        if (res.activateUser) {
          const tokenPlainText = res.activateUser.tokenPlainText;
          setTokenAndRedirect(tokenPlainText)
        }
      },
    })
  }

  return (
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <Logo href="/"/>
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          We sent you a token
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Enter it below to verify{' '}
        </p>
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

            <div className="flex items-center justify-between">
              <div className="text-sm leading-6">
                <Link
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                  href={`/auth/resend`}
                >
                  Didn&apos;t receive token?
                </Link>
              </div>
            </div>

            <FormErrorMessage status={status} />

            <div>
              <AuthButton isMutationInFlight={isMutationInFlight}>Sign in</AuthButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
