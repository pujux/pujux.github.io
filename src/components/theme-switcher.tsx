import { useEffect, useState } from 'react';

import { cn } from '../lib/utils';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, themes } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    mounted && (
      <div className="p-0.5 rounded-lg dark:">
        <ul className="relative grid h-8 grid-cols-3">
          {themes.map((slug, i) => (
            <li key={slug} className="flex items-center justify-center">
              <button
                tabIndex={i + 1}
                type="button"
                className="z-10 w-full h-full text-sm font-medium capitalize cursor-pointer"
                onClick={() => setTheme(slug)}
                onKeyDown={(e) => e.code === 'Enter' && setTheme('slug')}
              >
                {slug}
              </button>
            </li>
          ))}
          <div
            id="highlight"
            className={cn(
              'absolute w-1/3 h-full transition-transform translate-x-0 rounded-md dark:bg-gray-4',
              theme === 'dark' && 'translate-x-full',
              theme === 'system' && 'translate-x-[200%]',
            )}
          />
        </ul>
      </div>
    )
  );
};

export default ThemeSwitcher;
