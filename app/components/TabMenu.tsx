import { useMemo, useState } from 'react';

import TabSelector from './base/TabSelector';

import slugify from '~/utils/slugify';

type ContentType = {
  heading: string;
  date: string;
  bullets: string[];
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
  date,
  bullets,
  shouldShow,
}: ContentType & { shouldShow: boolean }) => (
  <div
    className={`${
      shouldShow ? 'block' : 'hidden'
    } max-w-full lg:max-w-[80%] xl:max-w-[70%]`}
  >
    <h3>{heading}</h3>
    <p>{date}</p>
    <ul>
      {bullets.map((bullet, idx) => (
        <li key={bullet.slice(0, 5) + idx}>{bullet}</li>
      ))}
    </ul>
  </div>
);
