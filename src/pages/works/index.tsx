import Link from 'next/link';
import { prefix } from '@config/config';
import Head from 'next/head';
import { works } from '@data/works/worksData';
import Section from '@components/_common/section/section';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WorksPage = () => {
  return (
    <>
      <Head>
        <title>Works</title>
      </Head>
      <Section>
        <div className="w-full flex flex-col gap-0.5 mb-4">
          <Link href="/works" className="text-2xl font-bold">
            Works
          </Link>
          <div className="w-full h-[2px] bg-gray-dark dark:bg-white rounded-full" />
        </div>
        <div className={'w-full grid grid-cols-2 gap-3'}>
          {works.reverse().map((work) => {
            return (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`col-span-2 sm:col-span-1 w-full relative pb-[56.25%] h-0 group overflow-hidden rounded-lg shadow-md `}
                key={work.id}
              >
                {work.imgSrc === '' ? <div>이미지가 없습니다</div> : <Image src={`${prefix}/images/works/${work.imgSrc}`} fill alt={work.name} />}
                <Link
                  href={`works/${work.pageName}`}
                  className={`absolute inset-0 w-full h-full bg-black/70 flex items-center justify-center group-hover:opacity-100 opacity-0 transition-all duration-300`}
                >
                  <span className="text-lg text-white">{work.name} &gt;</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </>
  );
};
export default WorksPage;
