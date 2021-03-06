import { ChakraProvider, extendTheme, Theme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import type { QueryFunction, QueryKey } from 'react-query';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from '../components/layout';
import api from '../lib/api';

const theme = extendTheme({
  styles: {
    global: {
      '.monaco-editor': {
        roundedTopRight: 'md',
        roundedBottomRight: 'md',
      },
    },
  },
});

const defaultQueryFn: QueryFunction<unknown, QueryKey> = async ({
  queryKey,
}) => {
  try {
    console.log({ queryKey });
    const { data } = await api.get(queryKey.join('/'));
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error);
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            queryFn: defaultQueryFn,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
export default MyApp;
