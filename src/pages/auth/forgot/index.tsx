import AuthLayout from "@/components/auth/AuthLayout";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import SessionQuery from "@/gql/session";
import { getClientEnvironment } from "@/lib/relay_client_environment";
import { session_Query } from "@/queries/__generated__/session_Query.graphql";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { usePreloadedQuery } from "react-relay";
import { RelayProps, withRelay } from "relay-nextjs";

function Forgot({ preloadedQuery }: RelayProps<{}, session_Query>) {
    const router = useRouter()
    const query = usePreloadedQuery(SessionQuery, preloadedQuery)

    useEffect(() => {
        if (query.viewer?.id) {
            router.push("/dashboard", undefined, { shallow: true })
        }
    }, [])

    return (
            <ForgotPasswordForm />
    )
}

function Loading() {
    return <div>Loading...</div>;
}

const ForgotPage = withRelay(Forgot, SessionQuery, {
    fallback: <Loading />,
    createClientEnvironment: () => getClientEnvironment()!,
    serverSideProps: async (ctx) => {
        //@ts-ignore
        const token = ctx.req?.cookies['auth'] ?? null
        return { token };
    },
    createServerEnvironment: async (
        _,
        { token }: { token: string | null }
    ) => {
        const { createServerEnvironment } = await import('@/lib/server/relay_server_environment');
        return createServerEnvironment(token);
    },
});

// @ts-ignore
ForgotPage.getLayout = function getLayout(page: ReactNode){
  return <AuthLayout>{page}</AuthLayout>
}

export default ForgotPage
