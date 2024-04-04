import { useRedirectIfUserExist } from "@/components/Hooks/useAuthRedirect";
import AuthLayout from "@/components/auth/AuthLayout";
import SignupForm from "@/components/auth/SignupForm";
import SessionQuery from "@/gql/session";
import { createRelayPage } from "@/lib/relay/createRelayPage";
import { session_Query } from "@/queries/__generated__/session_Query.graphql";
import { ReactNode } from "react";
import { usePreloadedQuery } from "react-relay";
import { RelayProps } from "relay-nextjs";

function Signup({ preloadedQuery }: RelayProps<{}, session_Query>) {
  const query = usePreloadedQuery(SessionQuery, preloadedQuery);

  useRedirectIfUserExist({
    user: query.viewer,
  });

  return <SignupForm />;
}

const SignupPage = createRelayPage(Signup, SessionQuery);

// @ts-ignore
SignupPage.getLayout = function getLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default SignupPage;
