import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

import '@/styles/globals.css';

import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    if (localStorage.getItem('mode') === 'dark') {
      toggleDarkmode();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDarkmode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.remove(mode);
    document.documentElement.classList.add(newMode);
    localStorage.setItem('mode', newMode);
    setMode(newMode);
  };

  return (
    <Layout>
      <Component {...pageProps} />
      <div
        className='fixed bottom-8 right-8 cursor-pointer rounded-full bg-secondary p-1 dark:bg-slate-800'
        onClick={toggleDarkmode}
      >
        <div className='flex h-8 w-8 items-center justify-center'>
          {mode === 'light' ? (
            <RiMoonFill className='h-7 w-7' />
          ) : (
            <RiSunFill className='h-6 w-6' />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default MyApp;
