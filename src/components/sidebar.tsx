import * as React from 'react';

import { Camera, Code, Home } from 'lucide-react';
import SidebarButton, { SidebarButtonProps } from './sidebar-button';

import Image from 'next/image';
import ThemeSwitcher from './theme-switcher';
import { useRouter } from 'next/router';

const sidebarItems: SidebarButtonProps[] = [
  { Icon: Home, title: 'Home', path: '/', shortcut: '1' },
  { Icon: Camera, title: 'About', path: '/about', shortcut: '2' },
  { Icon: Code, title: 'Projects', path: '/projects', shortcut: '3' },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <ul className="fixed h-[calc(100%-1rem)] w-60 top-0 flex flex-col justify-between items-stretch px-1 m-2 dark:text-dark-text">
      <li className="flex flex-col items-center gap-6">
        <div className="relative w-1/2 mt-6 aspect-video dark:invert">
          <Image src="/signature.png" alt="Julian Pufler" fill />
        </div>
        <ul className="flex flex-col w-full gap-2">
          {sidebarItems.map((item) => {
            const active = router.asPath === item.path;
            return (
              <SidebarButton key={item.path} {...item} isActive={active} />
            );
          })}
        </ul>
      </li>
      <li>
        <ThemeSwitcher />
      </li>
    </ul>
  );
};

export default Sidebar;
