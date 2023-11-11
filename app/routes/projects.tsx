import type { MetaFunction } from '@remix-run/node';

import calculator from '../assets/calculator.png';
import clock from '../assets/clock.png';
import drumkit from '../assets/drumkit.png';
import indecision from '../assets/indecision.png';
import music from '../assets/music.png';
import portfolio from '../assets/portfolio.png';
import weather from '../assets/weather.png';
import wedding from '../assets/wedding.png';

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
        "I built this website a few months before my wedding to avoid the chaos of managing RSVPs via text. I dove into a new stack, Remix.run, Tailwind CSS, and, of course, Typescript. Was the end result perfect? Nah, the design's meh, no tests, no database, no Headless CMS, and my Tailwind classes are like a messy closet. But it worked, and guests loved its simplicity.",
      ],
      imageUrl: wedding,
      links: [
        {
          type: 'code',
          url: 'https://github.com/towerbrother/laura-giorgio-com',
        },
        { type: 'demo', url: 'https://www.giorgio-laura.com/' },
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
      ],
      imageUrl: portfolio,
      links: [
        {
          type: 'code',
          url: 'https://github.com/towerbrother/giorgio-portfolio',
        },
        {
          type: 'demo',
          url: 'https://giorgio-portfolio-towerbrother.vercel.app/',
        },
      ],
    },
  },
  {
    displayName: 'Weather App',
    content: {
      heading: 'Weather App',
      subheading: 'React / SASS / OpenWeatherAPI',
      bullets: [
        'A weather app build with React Javascript library fetching current and forecast data from the OpenWeatherMap API. The app allows users to fetch current and forecast data for the 5 days following the day the request is made. The app allows temperatures to be shown in metric as well as imperial unit measure system.',
      ],
      imageUrl: weather,
      links: [
        { type: 'code', url: 'https://github.com/towerbrother/weather-app' },
        {
          type: 'demo',
          url: 'https://towerbrother.github.io/weather-app/',
        },
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
      ],
      imageUrl: calculator,
      links: [
        {
          type: 'code',
          url: 'https://github.com/towerbrother/JS-calculator',
        },
        {
          type: 'demo',
          url: 'https://towerbrother.github.io/JS-calculator/',
        },
      ],
    },
  },
  {
    displayName: 'Waves Music App',
    content: {
      heading: 'Waves Music App',
      subheading: 'HTML / CSS / Javascript',
      bullets: [
        'A music app build with React Javascript library fetching copyright free music from chillhop.com. The app allows users to listen to music. Only a few track are available. Tracks can be selected, the user can skip forward and backward. A list of available songs is reachable using the "library" button. The app is fully responsive and it ensures a pleasant UX using mobile, tablet or desktop devices.',
      ],
      imageUrl: music,
      links: [
        {
          type: 'code',
          url: 'https://github.com/towerbrother/waves-music-app',
        },
        {
          type: 'demo',
          url: 'https://towerbrother.github.io/waves-music-app/',
        },
      ],
    },
  },
  {
    displayName: 'JavaScript Drumkit',
    content: {
      heading: 'JavaScript Drumkit',
      subheading: 'HTML / CSS / Javascript',
      bullets: [
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      ],
      imageUrl: drumkit,
      links: [
        {
          type: 'code',
          url: 'https://github.com/towerbrother/JS-drumkit',
        },
        {
          type: 'demo',
          url: 'https://towerbrother.github.io/JS-drumkit/',
        },
      ],
    },
  },
  {
    displayName: 'Indecision App',
    content: {
      heading: 'Indecision App',
      subheading: 'React / SASS / Javascript',
      bullets: [
        'A simple application built with React Javascript library that allows the end user(s) to chose among different options in a randomised way. The app was developed as part of a ReactJS tutorial. The tutorial featured usage of React class components to manage state. I refactored the source code using Hooks to align it with modern best practices.',
      ],
      imageUrl: indecision,
      links: [
        {
          type: 'code',
          url: 'https://github.com/towerbrother/indecision-app',
        },
        {
          type: 'demo',
          url: 'https://towerbrother.github.io/indecision-app/',
        },
      ],
    },
  },
  {
    displayName: 'JavaScript Clock',
    content: {
      heading: 'JavaScript Clock',
      subheading: 'HTML / CSS / Javascript',
      bullets: [
        'The clock is built with HTML, CSS and Vanilla Javascript. It consist of two main parts: the clock face and the three hours, minutes and seconds hands. The setDate() method, called every 1 second by the setInterval(setDate, 1000) method, calculates the current time and the correct degree each hand shall position itself.',
      ],
      imageUrl: clock,
      links: [
        {
          type: 'code',
          url: 'https://github.com/towerbrother/JS-drumkit',
        },
        {
          type: 'demo',
          url: 'https://towerbrother.github.io/JS-clock/',
        },
      ],
    },
  },
];

export default function Work() {
  return (
    <>
      <div className='my-6 md:my-8 lg:mt-8 lg:mb-6 xl:mb-0 xl:mt-28'>
        <h1 className='text-shade-white text-4xl md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8'>
          Some Things I've Built
        </h1>
        <TabMenu tabs={PROJECTS_TABS} />
      </div>
      <a
        href='mailto:giorgio.torre8@gmail.com'
        className='max-w-max mt-3 mb-12 xl:mb-0 lg:mt-8 bg-transparent text-secondary border-2 border-solid border-secondary z-30 transition-all duration-200 ease-in-out text-xl py-2 px-3 hover:bg-secondary hover:text-primary'
      >
        Get In Contact
      </a>
    </>
  );
}
