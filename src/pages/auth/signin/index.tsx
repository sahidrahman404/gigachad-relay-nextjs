import { useRedirectIfUserExist } from "@/components/Hooks/useAuthRedirect";
import AuthLayout from "@/components/auth/AuthLayout";
import SigninFrom from "@/components/auth/SigninForm";
import SessionQuery from "@/gql/session";
import { createRelayPage } from "@/lib/relay/createRelayPage";
import { session_Query } from "@/queries/__generated__/session_Query.graphql";
import { ReactNode } from "react";
import { usePreloadedQuery } from "react-relay";
import { RelayProps } from "relay-nextjs";

function Signin({ preloadedQuery }: RelayProps<{}, session_Query>) {
  const query = usePreloadedQuery(SessionQuery, preloadedQuery);

  useRedirectIfUserExist({
    user: query.viewer,
  });

  return <SigninFrom />;
}

const SigninPage = createRelayPage(Signin, SessionQuery);

// @ts-ignore
SigninPage.getLayout = function getLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default SigninPage;
