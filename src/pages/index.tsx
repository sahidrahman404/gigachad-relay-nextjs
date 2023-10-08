import Logo from "@/components/common/Logo"
import { Button } from "@/components/ui/button"
import SessionQuery from "@/gql/session"
import { getClientEnvironment } from "@/lib/relay_client_environment"
import { session_Query } from "@/queries/__generated__/session_Query.graphql"
import Link from "next/link"
import { usePreloadedQuery } from "react-relay"
import { RelayProps, withRelay } from "relay-nextjs"

function MarketingPage({ preloadedQuery }: RelayProps<{}, session_Query>) {
  const query = usePreloadedQuery(SessionQuery, preloadedQuery)

  const user = query.viewer?.id
  const redirect = user ? "/dashboard" : "/auth/signin"

  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <Logo href="/"/>
          <h1
            className="mt-8 block text-3xl font-bold text-secondary-foreground sm:text-4xl lg:text-6xl lg:leading-tight"
          >
            Let's get healthy with <span className="text-primary">Gigachad</span>
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Say goodbye to generic workout plans! With Gigachad you can easily
            create personalized workout programs tailored to your specific needs and
            fitness level.
          </p>

          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <Button size="lg" asChild>
              <Link
                className="gap-x-3"
                href={redirect}
              >
                Get started
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative ml-4">
          <img
            className="w-full rounded-md"
            src="https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&h=800&q=80"
            alt="woman in pink long sleeve shirt and black pants holding black kettle bell"
          />
          <div
            className="absolute inset-0 -z-[1] -gradient-to-tr from-surface-200 via-white/0 to-surface/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"
          />

          <div className="absolute bottom-0 left-0">
            <svg
              className="w-2/3 ml-auto h-auto text-white dark:text-slate-900"
              width="630"
              height="451"
              viewBox="0 0 630 451"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="531" y="352" width="99" height="99" fill="currentColor" />
              <rect x="140" y="352" width="106" height="99" fill="currentColor" />
              <rect x="482" y="402" width="64" height="49" fill="currentColor" />
              <rect x="433" y="402" width="63" height="49" fill="currentColor" />
              <rect x="384" y="352" width="49" height="50" fill="currentColor" />
              <rect x="531" y="328" width="50" height="50" fill="currentColor" />
              <rect x="99" y="303" width="49" height="58" fill="currentColor" />
              <rect x="99" y="352" width="49" height="50" fill="currentColor" />
              <rect x="99" y="392" width="49" height="59" fill="currentColor" />
              <rect x="44" y="402" width="66" height="49" fill="currentColor" />
              <rect x="234" y="402" width="62" height="49" fill="currentColor" />
              <rect x="334" y="303" width="50" height="49" fill="currentColor" />
              <rect x="581" width="49" height="49" fill="currentColor" />
              <rect x="581" width="49" height="64" fill="currentColor" />
              <rect x="482" y="123" width="49" height="49" fill="currentColor" />
              <rect x="507" y="124" width="49" height="24" fill="currentColor" />
              <rect x="531" y="49" width="99" height="99" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>

  )
}

function Loading() {
  return <div>Loading...</div>;
}

export default withRelay(MarketingPage, SessionQuery, {
  // Fallback to render while the page is loading.
  // This property is optional.
  fallback: <Loading />,
  // Create a Relay environment on the client-side.
  // Note: This function must always return the same value.
  createClientEnvironment: () => getClientEnvironment()!,
  // Gets server side props for the page.
  serverSideProps: async (ctx) => {
    // This is an example of getting an auth token from the request context.
    // If you don't need to authenticate users this can be removed and return an
    // empty object instead.
    //@ts-ignore
    const token = ctx.req?.cookies['auth'] ?? null
    // if (token == null) {
    //   return {
    //     redirect: { destination: '/login', permanent: false },
    //   };
    // }

    return { token };
  },
  // Server-side props can be accessed as the second argument
  // to this function.
  createServerEnvironment: async (
    _,
    // The object returned from serverSideProps. If you don't need a token
    // you can remove this argument.
    { token }: { token: string | null }
  ) => {
    const { createServerEnvironment } = await import('@/lib/server/relay_server_environment');
    return createServerEnvironment(token);
  },
});
