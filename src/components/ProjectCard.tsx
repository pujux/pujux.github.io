import { FunctionComponent } from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

export interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  icon: { base64: string; darkModeInvert?: boolean };
  tag?: [string, string];
  badge?: [string, string];
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  title,
  description,
  url,
  icon,
  tag,
  badge,
}) => {
  return (
    <a href={url} className='flex' target='_blank' rel='noopener noreferrer'>
      <div className='group relative mx-auto flex w-[512px] max-w-full cursor-pointer flex-col gap-2 rounded-xl bg-secondary p-4 drop-shadow-md transition-all hover:scale-[1.025] hover:drop-shadow-xl dark:bg-slate-900 md:w-full'>
        {badge && (
          <span className='absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-md border-2 border-secondary bg-accent px-2 text-sm dark:border-slate-900 dark:bg-dark-accent'>
            {badge.map((b, i) => (
              <span key={i}>{b}</span>
            ))}
          </span>
        )}
        <h4 className='flex items-center gap-4 font-medium'>
          <NextImage
            className={clsxm(
              'transition-all group-hover:-mt-1 group-hover:-rotate-[5deg] group-hover:scale-125',
              icon.darkModeInvert && 'dark:invert'
            )}
            src={'data:image/png;base64,' + icon.base64}
            alt={title + ' logo'}
            width={20}
            height={20}
          />
          <span className='flex-grow'>{title}</span>
        </h4>
        <h5 className='flex-grow'>{description}</h5>
        {tag && (
          <span className='mt-1 flex items-center gap-2 text-sm opacity-75 md:text-xs'>
            {tag.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </span>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
