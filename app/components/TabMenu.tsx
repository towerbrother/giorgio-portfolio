import { useMemo, useState } from 'react';

import { FaGithub } from 'react-icons/fa/index.js';
import { BsBoxArrowUpRight } from 'react-icons/bs/index.js';

import TabSelector from './base/TabSelector';

import slugify from '~/utils/slugify';
import { Link } from '@remix-run/react';

type ContentType = {
  heading: string;
  subheading: string;
  bullets: string[];
  imageUrl?: string;
  links?: Array<{
    type: 'code' | 'demo';
    url: string;
  }>;
};

export type TabType = {
  displayName: string;
  slug?: string;
  content: ContentType;
};

const TabMenu = ({ tabs }: { tabs: TabType[] }) => {
  const [selectedTabKey, setSelectedTabKey] = useState(
    slugify(tabs?.[0].displayName)
  );

  const tabSelectors = useMemo(() => {
    return tabs.map(({ displayName }) => ({
      slug: slugify(displayName),
      displayName,
    }));
  }, [tabs]);

  const mappedContent = useMemo(() => {
    return tabs.flatMap((tab) => {
      const displayNameSlug = slugify(tab.displayName);
      return { ...tab.content, shouldShow: displayNameSlug === selectedTabKey };
    });
  }, [tabs, selectedTabKey]);

  return (
    <div className='flex flex-col lg:flex-row gap-6 lg:gap-12'>
      <TabSelector
        tabSelectors={tabSelectors}
        selectedTabKey={selectedTabKey}
        setSelectedTabKey={setSelectedTabKey}
      />
      {mappedContent.map((content, idx) => (
        <Content key={content.heading + idx} {...content} />
      ))}
    </div>
  );
};

export default TabMenu;

const Content = ({
  heading,
  subheading,
  bullets,
  links,
  imageUrl,
  shouldShow,
}: ContentType & { shouldShow: boolean }) => (
  <div
    className={`${
      shouldShow ? 'block' : 'hidden'
    } max-w-full lg:max-w-[70%] xl:max-w-[60%] relative`}
  >
    <h3 className='text-left text-lg md:text-2xl text-shade-white'>
      {heading}
    </h3>
    <h5 className='text-left text-sm md:text-md text-secondary font-semibold'>
      {subheading}
    </h5>
    {!imageUrl ? (
      <ul className='text-light-gray text-md md:text-lg mt-2'>
        {bullets.map((bullet, idx) => (
          <li
            key={bullet.slice(0, 5) + idx}
            className='list-disc list-inside mb-2 md:mb-3'
          >
            {bullet}
          </li>
        ))}
      </ul>
    ) : (
      <div>
        <img
          src={imageUrl}
          alt='App preview'
          className='cursor-pointer w-full md:w-[550px] h-auto md:opacity-80 hover:opacity-100 my-4 rounded-md'
        />
        <div className='bg-secondary py-2 px-3 md:p-4 relative md:absolute bottom-0 md:bottom-[60px] left-0 md:left-[60px] w-auto md:w-[550px] rounded-md'>
          <span className='text-primary text-sm md:text-md justify-center font-semibold'>
            {bullets.join(' ')}
          </span>
        </div>
      </div>
    )}
    {!!links?.length && (
      <div className='flex justify-start align-middle gap-5 mt-5'>
        {links?.map((link, index) => (
          <Link
            key={link.type + index}
            to={link.url}
            target='_blank'
            className='cursor-pointer text-secondary text-2xl hover:opacity-0.9'
          >
            {link.type === 'code' ? <FaGithub /> : <BsBoxArrowUpRight />}
          </Link>
        ))}
      </div>
    )}
  </div>
);
