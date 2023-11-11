import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Giorgio Torre' },
    {
      name: 'description',
      content: 'Homepage - Giorgio Torre portfolio.',
    },
  ];
};

export default function Index() {
  return (
    <div className='flex flex-col justify-start xl:ml-[5vw]'>
      <div className='mt-[10vh] md:mt-[20vh]'>
        <h2 className='text-secondary text-base mb-4 md:mb-6'>
          Hi, my name is
        </h2>
        <h1 className='text-shade-white text-4xl md:text-6xl lg:text-7xl mb-3'>
          Giorgio Torre.
        </h1>
        <h3 className='text-light-gray text-4xl md:text-6xl lg:text-7xl mb-5'>
          I build stuff for the web.
        </h3>
        <p className='text-light-gray text-md md:text-xl max-w-sm md:max-w-lg'>
          I’m a software developer specialising in building reliable and user
          friendly digital experiences. Currently, I’m focusing on building a
          multi-portal solution at{' '}
          <a
            className='text-secondary hover:opacity-80'
            href='https://tenhil.de/'
            title='Tenhil GmbH & Co KG'
            rel='noreferrer'
            target='_blank'
          >
            Tenhil
          </a>
          .
        </p>
      </div>
      <Link
        to='/about'
        className='max-w-max my-6 xl:my-12 bg-transparent text-secondary border-2 border-solid border-secondary z-30 transition-all duration-200 ease-in-out text-xl py-2 px-3 hover:bg-secondary hover:text-primary'
      >
        About Me
      </Link>
    </div>
  );
}
