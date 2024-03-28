import { ComponentType, ReactNode } from "react";
import { RelayProps, withRelay } from "relay-nextjs";
import { GraphQLTaggedNode } from "relay-runtime";
import { getClientEnvironment } from "../relay_client_environment";
import { Loading } from "@/components/common/Loading";

function createRelayPage<Props extends RelayProps>(
  component: ComponentType<Props>,
  query: GraphQLTaggedNode,
  fallback: ReactNode = Loading(),
) {
  return withRelay(component, query, {
    fallback,
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
}

export { createRelayPage };
