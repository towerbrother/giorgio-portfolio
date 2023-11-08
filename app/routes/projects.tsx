import type { MetaFunction } from '@remix-run/node';

import type { TabType } from '~/components/TabMenu';
import TabMenu from '~/components/TabMenu';

export const meta: MetaFunction = () => {
  return [
    { title: "Things I've Built" },
    {
      name: 'description',
      content: 'Projects Page - Giorgio Torre portfolio',
    },
  ];
};

const PROJECTS_TABS: TabType[] = [
  {
    displayName: 'Wedding Website',
    content: {
      heading: 'Our Wedding',
      subheading: 'Remix / Tailwind / Typescript / Vercel',
      bullets: [
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      ],
      links: [
        { icon: 'GitHub', slug: 'Github' },
        { icon: 'external', slug: 'external' },
      ],
    },
  },
  {
    displayName: 'Personal Portfolio',
    content: {
      heading: 'Personal Portfolio',
      subheading: 'Remix / Tailwind / Typescript / Vercel',
      bullets: [
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      ],
      links: [
        { icon: 'GitHub', slug: 'Github' },
        { icon: 'external', slug: 'external' },
      ],
    },
  },
  {
    displayName: 'Weather App',
    content: {
      heading: 'Weather App',
      subheading: 'React / SASS / OpenWeatherAPI',
      bullets: [
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      ],
      links: [
        { icon: 'GitHub', slug: 'Github' },
        { icon: 'external', slug: 'external' },
      ],
    },
  },
  {
    displayName: 'JavaScript Calculator',
    content: {
      heading: 'JavaScript Calculator',
      subheading: 'HTML / CSS / Javascript',
      bullets: [
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      ],
    },
  },
];

export default function Work() {
  return (
    <>
      <div className='my-6 md:my-8 lg:mt-8 lg:mb-6 xl:mb-0 xl:mt-36'>
        <h1 className='text-shade-white text-4xl md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8'>
          Some Things I've Built
        </h1>
        <TabMenu tabs={PROJECTS_TABS} />
      </div>
      <a
        href='mailto:giorgio.torre8@gmail.com'
        className='max-w-max mt-3 mb-12 lg:mt-6 bg-transparent text-secondary border-2 border-solid border-secondary z-30 transition-all duration-200 ease-in-out text-xl py-2 px-3 hover:bg-secondary hover:text-primary'
      >
        Get In Contact
      </a>
    </>
  );
}
