import { useRedirectIfUserNotExist } from "@/components/Hooks/useAuthRedirect";
import Layout from "@/components/Layout";
import { AddRoutineForm } from "@/components/Routines/AddRoutineForm";
import { getClientEnvironment } from "@/lib/relay_client_environment";
import { addRoutine_Query } from "@/queries/__generated__/addRoutine_Query.graphql";
import { usePreloadedQuery } from "react-relay";
import { RelayProps, withRelay } from "relay-nextjs";
import { graphql } from "relay-runtime";

const AddRoutineQuery = graphql`
  query addRoutine_Query {
    viewer {
      ...useAuthRedirectFragment
      ...AddRoutineFormFragment
    }
  }
`;

function AddRoutine({ preloadedQuery }: RelayProps<{}, addRoutine_Query>) {
  const data = usePreloadedQuery(AddRoutineQuery, preloadedQuery);
  useRedirectIfUserNotExist({
    user: data.viewer,
  });

  if (!data.viewer) {
    return null;
  }

  return <AddRoutineForm queryRef={data.viewer} />;
}

function Loading() {
  return <div>Loading...</div>;
}

const AddRoutinePage = withRelay(AddRoutine, AddRoutineQuery, {
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
AddRoutinePage.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default AddRoutinePage;
