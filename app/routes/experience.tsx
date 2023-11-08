import type { MetaFunction } from '@remix-run/node';

import type { TabType } from '~/components/TabMenu';
import TabMenu from '~/components/TabMenu';

export const meta: MetaFunction = () => {
  return [
    {
      name: 'description',
      content: 'Experience page - Giorgio Torre portfolio',
    },
  ];
};

const EXPERIENCE_TABS: TabType[] = [
  {
    displayName: 'tab #1',
    content: {
      heading: 'job title #1',
      date: 'date #1',
      bullets: ['bullet #1.1', 'bullet #1.2', 'bullet #1.3'],
    },
  },
  {
    displayName: 'tab #2',
    content: {
      heading: 'job title #2',
      date: 'date #2',
      bullets: ['bullet #2.1', 'bullet #2.2', 'bullet #2.3'],
    },
  },
  {
    displayName: 'tab #3',
    content: {
      heading: 'job title #3',
      date: 'date #3',
      bullets: ['bullet #3.1', 'bullet #3.2', 'bullet #3.3'],
    },
  },
];

export default function Experience() {
  return (
    <div className='my-6 md:my-8 lg:mt-8 lg:mb-6 xl:mb-0 xl:mt-36'>
      <h1 className='text-shade-white text-4xl md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8'>
        Where I've Worked
      </h1>
      <TabMenu tabs={EXPERIENCE_TABS} />
    </div>
  );
}
