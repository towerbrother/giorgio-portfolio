import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    {
      name: 'description',
      content: 'Home page - Giorgio Torre portfolio ',
    },
  ];
};

export default function Index() {
  return (
    <div className='h-full flex flex-col justify-center'>
      <h2 className='text-secondary text-base mb-4 md:mb-8'>Hi, my name is</h2>
      <h1 className='text-shade-white text-4xl md:text-6xl lg:text-7xl mb-3'>
        Giorgio Torre.
      </h1>
      <h3 className='text-light-gray text-4xl md:text-6xl lg:text-7xl mb-5'>
        I build stuff for the web.
      </h3>
      <p className='text-light-gray text-md md:text-xl max-w-sm md:max-w-lg mb-12'>
        I’m a software developer specialising in building exceptional digital
        experiences. Currently, I’m focusing on building a multi-portal solution
        at{' '}
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
  );
}
