/* eslint-disable jsx-a11y/img-redundant-alt */
import type { MetaFunction } from '@remix-run/node';

import profile from '../assets/profile.jpg';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'About Me' },
    {
      name: 'description',
      content: 'About Page - Giorgio Torre portfolio',
    },
  ];
};

export default function About() {
  return (
    <>
      <div className='mt-8 mb-4 lg:mt-16 lg:mb-0 xl:mt-28'>
        <h1 className='text-shade-white text-4xl md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8'>
          About Me
        </h1>
        <div className='flex flex-col xl:flex-row justify-center xl:justify-start align-start xl:align-top gap-6 xl:gap-12'>
          <div>
            <p className='text-light-gray text-md lg:text-lg xl:text-xl max-w-xl md:max-w-2xl mb-3 lg:mb-5'>
              Hello! My name is Giorgio, and I'm a father, husband, son, friend,
              and a passionate software developer. I find immense satisfaction
              in solving problems and witnessing my work positively impact
              hundreds, if not thousands, of users.
            </p>
            <p className='text-light-gray text-md lg:text-lg xl:text-xl max-w-xl md:max-w-2xl mb-3 lg:mb-5'>
              My journey into software development was a deliberate shift from a
              career in project management. I wanted to be more hands-on,
              practical, and directly involved in creating solutions. I'm a
              self-starter, dedicated to continually acquiring new skills while
              refining my existing ones.
            </p>
            <p className='text-light-gray text-md lg:text-lg xl:text-xl max-w-xl md:max-w-2xl mb-3 lg:mb-5'>
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className='flex text-light-gray text-sm md:text-md gap-6'>
              <div>
                <li className='list-disc list-inside mb-2 md:mb-3'>
                  JavaScript (ES6+)
                </li>
                <li className='list-disc list-inside mb-2 md:mb-3'>
                  TypeScript
                </li>
                <li className='list-disc list-inside mb-2 md:mb-3'>React</li>
              </div>
              <div>
                <li className='list-disc list-inside mb-2 md:mb-3'>Next.js</li>
                <li className='list-disc list-inside mb-2 md:mb-3'>Node.js</li>
                <li className='list-disc list-inside mb-2 md:mb-3'>Redux</li>
              </div>
            </ul>
          </div>
          <img
            src={profile}
            alt='Giorgio Torre Profile Picture'
            className='h-[200px] xl:h-[350px] w-[200px] xl:w-[350px]'
          />
        </div>
      </div>
      <Link
        to='/experience'
        className='max-w-max mt-3 mb-12 lg:mt-6 bg-transparent text-secondary border-2 border-solid border-secondary z-30 transition-all duration-200 ease-in-out text-xl py-2 px-3 hover:bg-secondary hover:text-primary'
      >
        Where I've Worked
      </Link>
    </>
  );
}
