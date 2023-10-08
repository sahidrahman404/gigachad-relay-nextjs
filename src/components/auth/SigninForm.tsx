import AuthTokenMutation from "@/gql/authToken";
import { authToken_Mutation } from "@/queries/__generated__/authToken_Mutation.graphql";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-relay";
import z from "zod";
import { FormErrorMessage, GqlErrorStatus } from "../gql-helper/FormErrorMessage";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import AuthButton from "./AuthButton";
import { ShowPasswordCheckBox } from "./ShowPasswordCheckBox";
import Logo from "../common/Logo";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(72),
});

export default function SigninFrom() {
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
      email: "",
      password: "",
    },
  });

  const [commitMutation, isMutationInFlight] = useMutation<authToken_Mutation>(AuthTokenMutation);

  function onSubmit(val: z.infer<typeof formSchema>) {
    commitMutation({
      variables: {
        input: {
          email: val.email,
          password: val.password
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

        if (res.createAuthenticationToken?.user.activated === 1) {
          const tokenPlainText = res.createAuthenticationToken?.tokenPlainText;
          fetch(`http://localhost:3000/api/tokens/set/${tokenPlainText}`)
            .then(_ => {
              router.push(`/dashboard`, undefined, { shallow: true })
            })
        };

        if (res.createAuthenticationToken?.user.activated === 0) {
          router.push(
            `/auth/verify`
          );
        }
      },
    })
  }

  return (
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <Logo href="/"/>
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Not a member?{' '}
          <Link
            className="text-blue-600 decoration-2 hover:underline font-medium"
            href="/auth/signup"
          >
            Sign up here
          </Link>
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
                    <Input placeholder="smith@example.com" {...field} />
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
            <div className="flex items-center justify-between">
              <ShowPasswordCheckBox {...{ showPassword, setShowPassword }} />
              <div className="text-sm leading-6">
                <Link
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                  href={`/auth/forgot`}
                >
                  Forgot password?
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
