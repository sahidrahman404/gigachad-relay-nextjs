import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { useRelayNextjs } from "relay-nextjs/app";
import { getClientEnvironment } from "@/lib/relay_client_environment";
import { ErrorBoundary } from "react-error-boundary";
import GlobalError from "@/components/Error/GlobalError";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { useRouter } from "next/router";
import { RouterProvider } from "react-aria-components";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  let router = useRouter();
  const { env, ...relayProps } = useRelayNextjs(pageProps, {
    createClientEnvironment: () => getClientEnvironment()!,
  });
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <RouterProvider navigate={router.push}>
      {getLayout(
        <ErrorBoundary fallback={<GlobalError />}>
          <RelayEnvironmentProvider environment={env}>
            <Component {...pageProps} {...relayProps} />
          </RelayEnvironmentProvider>
        </ErrorBoundary>,
      )}
    </RouterProvider>
  );
}
