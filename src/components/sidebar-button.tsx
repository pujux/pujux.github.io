import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export interface SidebarButtonProps {
  Icon: LucideIcon;
  title: string;
  path: string;
  shortcut: string;
  isActive?: boolean;
}

export type SidebarButtonType = React.FC<SidebarButtonProps>;

const SidebarButton: SidebarButtonType = ({
  Icon,
  title,
  path,
  shortcut,
  isActive = false,
}) => {
  const router = useRouter();

  useEffect(() => {
    const f = (e: KeyboardEvent) => {
      if (e.key === shortcut) {
        router.push(path);
      }
    };

    window.addEventListener('keyup', f);
    return () => window.removeEventListener('keyup', f);
  }, []);

  return (
    <Link href={path} passHref>
      <li
        className={cn(
          'flex w-full justify-between items-center py-2 pl-4 pr-3 rounded-lg transition-colors border-[0.5px] border-transparent',
          'dark:hover:bg-[hsla(0,0%,100%,.05)]',
          isActive &&
            'dark:!bg-[hsla(0,0%,100%,.1)] dark:!border-[hsla(0,0%,100%,.04)]',
        )}
      >
        <div className="flex items-center gap-3">
          <Icon size={16} />
          <span className="text-xs leading-loose tracking-wide">{title}</span>
        </div>
        <span className="flex items-center justify-center w-4 h-4 text-xs rounded dark:bg-[hsla(0,0%,100%,.06)] dark:text-[hsla(0,0%,100%,.372)]">
          {shortcut}
        </span>
      </li>
    </Link>
  );
};

export default SidebarButton;
