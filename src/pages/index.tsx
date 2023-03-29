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
  return (
    <>
      <Seo />
      <main className='relative mx-auto flex flex-col items-center md:max-w-5xl'>
        <div className='flex flex-col gap-8 px-4 py-16 md:gap-12 md:px-8'>
          <section className='flex flex-col gap-8 md:flex-row md:items-center md:gap-16'>
            <div className='w-min overflow-hidden rounded-full border-[6px] border-secondary shadow-inner dark:border-slate-700 md:min-w-[140px]'>
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
              <span className='font-normal'>
                - a software engineer and tech enthusiast from Austria 🇦🇹.
              </span>
            </h1>
          </section>

          <section className='border-b border-divider pb-8 dark:border-slate-800 sm:border-b-2'>
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
        <footer className='w-full px-4 transition-all md:px-8'>
          <div className='flex flex-col items-center justify-center gap-12 py-12 text-center'>
            <h3 className='font-normal'>
              <span className=''>
                I'm most active on{' '}
                <a href='https://twitter.com/pujux_'>
                  <RiTwitterFill className='-mt-1 inline transition-colors ease-in-out hover:text-twitter' />
                </a>{' '}
                and{' '}
                <a href='https://github.com/pujux'>
                  <RiGithubFill className='-mt-1 inline transition-colors ease-in-out hover:text-github' />
                </a>
              </span>
              <br />
              but you can also follow me on{' '}
              <a href='https://instagram.com/le.buff'>
                <RiInstagramLine className='-mt-1 inline transition-colors ease-in-out hover:text-instagram' />{' '}
              </a>
              and{' '}
              <a href='https://linkedin.com/in/julianpufler/'>
                <RiLinkedinBoxLine
                  className={clsxm(
                    '-mt-1 inline transition-colors ease-in-out',
                    'hover:text-linkedin'
                  )}
                />
              </a>
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
