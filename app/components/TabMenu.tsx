import { useMemo, useState } from 'react';

import TabSelector from './base/TabSelector';

import slugify from '~/utils/slugify';

type ContentType = {
  heading: string;
  subheading: string;
  bullets: string[];
  imageUrl?: string;
  links?: Array<{
    icon: string;
    slug: string;
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
  shouldShow,
}: ContentType & { shouldShow: boolean }) => (
  <div
    className={`${
      shouldShow ? 'block' : 'hidden'
    } max-w-full lg:max-w-[70%] xl:max-w-[60%]`}
  >
    <h3 className='text-left text-lg md:text-2xl text-shade-white'>
      {heading}
    </h3>
    <h5 className='text-left text-sm md:text-md text-secondary'>
      {subheading}
    </h5>
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
  </div>
);
