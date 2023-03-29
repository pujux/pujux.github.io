import { FunctionComponent } from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

export interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  icon: string;
  tag?: [string, string];
  badge?: [string, string];
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  title,
  description,
  icon,
  tag,
  badge,
}) => {
  return (
    <div
      className={clsxm(
        'group relative mx-auto flex w-[512px] max-w-full cursor-pointer flex-col gap-2 rounded-xl bg-[hsla(30,33%,99%,var(--tw-bg-opacity))] bg-opacity-80 p-4 drop-shadow-md transition-all hover:scale-[1.025] hover:drop-shadow-xl md:w-full'
      )}
    >
      {badge && (
        <span className='absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-md border-2 border-[hsla(30,33%,99%,.8)] bg-[hsl(27,80%,83%)] px-2 text-sm text-black text-opacity-75'>
          {badge.map((b, i) => (
            <span key={i}>{b}</span>
          ))}
        </span>
      )}
      <h4 className='flex items-center gap-4 font-medium'>
        <NextImage
          className='transition-all group-hover:-mt-1 group-hover:-rotate-[5deg] group-hover:scale-125'
          src={icon}
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
  );
};

export default ProjectCard;
