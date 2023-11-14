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
  path: string;
  user: useAuthRedirectFragment$key | null;
};

function useAuthRedirect({ path, user }: UseAuthRedirectProps) {
  const data = useFragment(UseAuthRedirectFragment, user);
  const router = useRouter();

  useEffect(() => {
    if (data?.id) {
      router.push(`${path}`);
    }
  }, []);
}

export default useAuthRedirect;
