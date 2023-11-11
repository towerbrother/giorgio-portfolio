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
        'Crafted this website as my digital resume. Minimalist vibes, powered by Remix and styled with Tailwind. No frills, just speedy delivery to the world. Hope it sparks inspiration!',
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
        "Built using the React JavaScript library, this weather app fetches current and forecast data from the OpenWeatherMap API. Users can retrieve weather info for the next 5 days, with the flexibility to view temperatures in both metric and imperial units. It's your go-to for quick, accurate weather updates!",
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
        "My calculator, crafted with HTML, CSS, and Vanilla Javascript, features a display with an x-axis scrollbar to manage overflow. The keypad includes four types of keys: Operators, Numbers, Decimal, and Clear. Each key has a click event listener triggering specific methods, updating the display through the updateDisplay() method. Utilising a state object, I track clicked keys, displayed values, and operands. The waitingForSecondOperand flag guides the app's behaviour based on whether the first operand and operator were already inserted. The reset() method restores the state to its initial values. Users can click operators in sequence, and the state handles it smoothly. However, decimals can't be the first value or added when one is already displayed.",
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
        'This React-powered music app pulls in copyright-free tunes from chillhop.com. Enjoy a curated selection of tracks, skip forward and backward, and explore the playlist through the Library button. Whether on mobile, tablet, or desktop, the fully responsive design guarantees a delightful user experience. [Credit to DevEd]',
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
        'This drumkit app, constructed with HTML, CSS, and Vanilla Javascript, responds to keydown events. When a displayed key is pressed, it plays a corresponding sound. The playSound method enables users to press a key multiple times, restarting the sound each time. [Credit to Wes Bos]',
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
        'A no-nonsense application crafted with the ReactJS library, empowering users to make randomised choices among various options. Originally part of a ReactJS tutorial utilising class components for state management, I took it a step further, refactoring the source code with Hooks to align it with best practices.',
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
          url: 'https://github.com/towerbrother/JS-clock',
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
