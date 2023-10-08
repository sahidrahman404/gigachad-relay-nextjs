import UserMutation from "@/gql/user";
import { user_Mutation } from "@/queries/__generated__/user_Mutation.graphql";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
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


const formSchema = z
  .object({
    email: z.string().email(),
    name: z.string().min(3),
    username: z.string().min(5).max(72),
    password: z.string().min(8).max(72),
    confirmPassword: z.string().min(8).max(72),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function SignupForm() {
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
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [commitMutation, isMutationInFlight] = useMutation<user_Mutation>(UserMutation);
  function onSubmit(val: z.infer<typeof formSchema>) {
    commitMutation({
      variables: {
        input: {
          email: val.email,
          name: val.name,
          username: val.username,
          hashedPassword: val.password,
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
        }
        if (res.createUser.email) {
          router.push(`/auth/verify`);
          return;
        }
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
          Sign up for a new account
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Already a member?{' '}
          <Link
            className="text-blue-600 decoration-2 hover:underline font-medium"
            href="/auth/signin"
          >
            Sign in here
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="smith@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="smith123" {...field} />
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
            <ShowPasswordCheckBox {...{ showPassword, setShowPassword }} />
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
