import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='gradient-bg min-h-screen'>{children}</div>;
}
