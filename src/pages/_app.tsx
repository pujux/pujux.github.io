import '../styles/index.css';

import * as React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';
import Sidebar from '@components/sidebar';
import { ThemeProvider } from 'next-themes';
import { cn } from '@lib/utils';

const Background = () => (
  <div className={cn('fixed w-full h-full -z-10', 'dark:bg-gray-2')} />
);

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Julian Pufler</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ThemeProvider enableSystem>
      <div className="w-screen h-screen overflow-hidden">
        <Sidebar />
        <Background />
        <main className="relative h-[calc(100%-1rem)] flex flex-col items-center p-8 m-2 ml-64 rounded-xl dark:bg-gray-1">
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  </>
);

export default App;
