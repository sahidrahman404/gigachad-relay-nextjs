import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { useRelayNextjs } from 'relay-nextjs/app';
import { getClientEnvironment } from '@/lib/relay_client_environment';
import { ErrorBoundary } from 'react-error-boundary';
import GlobalError from '@/components/Error/GlobalError';

export default function App({ Component, pageProps }: AppProps) {
  const { env, ...relayProps } = useRelayNextjs(pageProps, {
    createClientEnvironment: () => getClientEnvironment()!,
  });
  // @ts-ignore
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <ErrorBoundary fallback={<GlobalError />}>
      <RelayEnvironmentProvider environment={env}>
        <Component {...pageProps} {...relayProps} />
      </RelayEnvironmentProvider>
    </ErrorBoundary>,
  )
}
