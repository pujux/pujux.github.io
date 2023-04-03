import { Client } from '@notionhq/client';
import { InferGetStaticPropsType } from 'next';
import {
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTwitterFill,
} from 'react-icons/ri';

import clsxm from '@/lib/clsxm';

import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import ProjectCard from '@/components/ProjectCard';
import Seo from '@/components/Seo';

// notion API is typed badly so I just used any here

export async function getStaticProps() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const blockRes = await notion.blocks.children.list({
    block_id: '5673a213b29448369d351d9405f456ff',
  });

  const blocks = await Promise.all(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blockRes.results.map(async (r: any) =>
      r.type !== 'child_database'
        ? r
        : await notion.databases.query({
            database_id: r.id,
            sorts: [{ timestamp: 'created_time', direction: 'ascending' }],
          })
    )
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return { props: { blocks: blocks as any[] } };
}

export default function HomePage({
  blocks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
              {blocks[0].paragraph.rich_text[0].plain_text.split('-')[0]}
              <span className='font-normal'>
                - {blocks[0].paragraph.rich_text[0].plain_text.split('-')[1]}
              </span>
            </h1>
          </section>

          <section className='border-b border-divider pb-8 dark:border-slate-800 sm:border-b-2'>
            <h3 className='text-justify font-normal sm:max-w-[75%] md:max-w-[85%] lg:max-w-[75%]'>
              {blocks[1].paragraph.rich_text[0].plain_text}
            </h3>
          </section>

          <section>
            <h2 className='mb-8 font-medium'>What I work on</h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {blocks[2].results.map(({ id, properties }: any) => (
                <ProjectCard
                  key={id}
                  title={properties['Title'].title[0].plain_text}
                  description={
                    properties['Description'].rich_text[0].plain_text
                  }
                  icon={{ base64: properties['Image'].rich_text[0].plain_text }}
                  url={properties['URL'].url}
                  tag={
                    properties['Tag'].rich_text[0] && [
                      properties['TagIcon'].rich_text[0]?.plain_text ?? '',
                      properties['Tag'].rich_text[0].plain_text,
                    ]
                  }
                  badge={
                    properties['Badge'].rich_text[0] && [
                      properties['BadgeIcon'].rich_text[0]?.plain_text ?? '',
                      properties['Badge'].rich_text[0].plain_text,
                    ]
                  }
                />
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
