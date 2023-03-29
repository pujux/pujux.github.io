import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='gradient-bg dark:dark-gradient-bg min-h-screen text-black dark:text-white'>
      {children}
    </div>
  );
}
