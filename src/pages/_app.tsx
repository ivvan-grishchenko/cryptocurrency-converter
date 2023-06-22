import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';

import { Header } from '../components/Header/Header';

export default function App(props: AppProps): ReactElement {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Cryptocurrency converter</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
        <Notifications />
        <Header>
          <Component {...pageProps} />
        </Header>
      </MantineProvider>
    </>
  );
}
