import { useAuthRedirectFragment$key } from "@/queries/__generated__/useAuthRedirectFragment.graphql";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { graphql, useFragment } from "react-relay";

const UseAuthRedirectFragment = graphql`
  fragment useAuthRedirectFragment on User {
    id
  }
`;

type UseAuthRedirectProps = {
  user: useAuthRedirectFragment$key | null | undefined;
};

function useRedirectIfUserExist({ user }: UseAuthRedirectProps) {
  const data = useFragment(UseAuthRedirectFragment, user);
  const router = useRouter();

  useEffect(() => {
    if (data?.id) {
      router.push("/dashboard/workout");
    }
  }, []);
}

function useRedirectIfUserNotExist({ user }: UseAuthRedirectProps) {
  const data = useFragment(UseAuthRedirectFragment, user);
  const router = useRouter();

  useEffect(() => {
    if (data === undefined || data === null) {
      router.push("/auth/signin");
      return;
    }
  }, []);
}

export { useRedirectIfUserExist, useRedirectIfUserNotExist };
