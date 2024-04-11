import { Profile } from "@/components/Accounts/Profile";
import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { createRelayPage } from "@/lib/relay/createRelayPage";
import { profile_Query } from "@/queries/__generated__/profile_Query.graphql";
import { ReactNode } from "react";
import { usePreloadedQuery } from "react-relay";
import { RelayProps } from "relay-nextjs";
import { graphql } from "relay-runtime";

const ProfileQuery = graphql`
  query profile_Query {
    viewer {
      ...useAuthRedirectFragment
      ...ProfileFragment
    }
  }
`;

function ProfilePage({ preloadedQuery }: RelayProps<{}, profile_Query>) {
  const data = usePreloadedQuery(ProfileQuery, preloadedQuery);
  useRedirectIfUserNotExist({
    user: data.viewer,
  });

  if (!data.viewer) {
    return null;
  }

  return <Profile queryRef={data.viewer} />;
}

const ProfilePageDefault = createRelayPage(ProfilePage, ProfileQuery);

// @ts-ignore
ProfilePageDefault.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default ProfilePageDefault;
