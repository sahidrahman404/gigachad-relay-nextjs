import { useRedirectIfUserExist } from "@/components/Hooks/useAuthRedirect";
import AuthLayout from "@/components/auth/AuthLayout";
import SigninFrom from "@/components/auth/SigninForm";
import SessionQuery from "@/gql/session";
import { getClientEnvironment } from "@/lib/relay_client_environment";
import { session_Query } from "@/queries/__generated__/session_Query.graphql";
import { ReactNode } from "react";
import { usePreloadedQuery } from "react-relay";
import { RelayProps, withRelay } from "relay-nextjs";

function Signin({ preloadedQuery }: RelayProps<{}, session_Query>) {
  const query = usePreloadedQuery(SessionQuery, preloadedQuery);

  useRedirectIfUserExist({
    user: query.viewer,
  });

  return <SigninFrom />;
}

function Loading() {
  return <div>Loading...</div>;
}

const SigninPage = withRelay(Signin, SessionQuery, {
  fallback: <Loading />,
  createClientEnvironment: () => getClientEnvironment()!,
  serverSideProps: async (ctx) => {
    //@ts-ignore
    const token = ctx.req?.cookies["auth"] ?? null;
    return { token };
  },
  createServerEnvironment: async (_, { token }: { token: string | null }) => {
    const { createServerEnvironment } = await import(
      "@/lib/server/relay_server_environment"
    );
    return createServerEnvironment(token);
  },
});

// @ts-ignore
SigninPage.getLayout = function getLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default SigninPage;
