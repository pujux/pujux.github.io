import {
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTwitterFill,
} from 'react-icons/ri';

import clsxm from '@/lib/clsxm';
import { projectData } from '@/lib/data';

import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import ProjectCard from '@/components/ProjectCard';
import Seo from '@/components/Seo';

export default function HomePage() {
  // const [mode, setMode] = useState<'dark' | 'light'>('light');

  return (
    <>
      <Seo />
      <main className='relative mx-auto flex flex-col items-center md:max-w-5xl'>
        <div className='flex flex-col gap-8 py-16 px-4 md:gap-12 md:px-8'>
          <section className='flex flex-col gap-8 md:flex-row md:items-center md:gap-16'>
            <div className='w-min overflow-hidden rounded-full border-[6px] border-[hsla(30,33%,99%,.8)] shadow-inner md:min-w-[140px]'>
              <NextImage
                width={128}
                height={128}
                src='/images/profile.png'
                alt='Profile picture'
                useSkeleton
              />
            </div>
            <h1 className='h0 md:h1 md:max-w-[75%]'>
              Hi, I'm Julian{' '}
              <span className={clsxm('font-normal', 'text-secondary-light')}>
                - a software engineer and tech enthusiast from Austria 🇦🇹.
              </span>
            </h1>
          </section>

          <section className='border-b border-[hsl(27,35%,83%,.8)] pb-8 sm:border-b-2'>
            <h3 className='text-justify font-normal sm:max-w-[75%] md:max-w-[85%] lg:max-w-[75%]'>
              I have extensive experience building both frontend and backend
              applications with remote teams. Currently I'm working at Lean
              Coders while also maintaining the Disease.sh API.
            </h3>
          </section>

          <section>
            <h2 className='mb-8 font-medium'>What I work on</h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {projectData.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </div>
          </section>
        </div>
        <footer className={clsxm('w-full px-4 transition-all md:px-8')}>
          <div
            className={clsxm(
              'flex flex-col items-center justify-center gap-12 py-12 text-center',
              'text-secondary-light'
            )}
          >
            <h3 className='font-normal'>
              <span className={clsxm('text-black')}>
                I'm most active on{' '}
                <RiTwitterFill className='-mt-1 inline transition-colors duration-300 ease-in-out hover:text-[hsl(203,89%,53%)]' />{' '}
                and{' '}
                <RiGithubFill className='-mt-1 inline transition-colors duration-300 ease-in-out hover:text-[hsl(212,100%,67%)]' />
              </span>
              <br />
              but you can also follow me on{' '}
              <RiInstagramLine className='-mt-1 inline transition-colors duration-300 ease-in-out hover:text-[hsl(356,100%,69%)]' />{' '}
              and{' '}
              <RiLinkedinBoxLine
                className={clsxm(
                  '-mt-1 inline transition-colors duration-300 ease-in-out',
                  'hover:text-[hsl(201,100%,35%)]'
                )}
              />
              .
            </h3>
            <p>
              © {new Date().getFullYear()} by{' '}
              <UnderlineLink href='https://pufler.dev'>
                Julian Pufler
              </UnderlineLink>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
