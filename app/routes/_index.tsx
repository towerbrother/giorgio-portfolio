import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    {
      name: 'description',
      content: 'Home page of my personal portfolio website.',
    },
  ];
};

export default function Index() {
  return (
    <div className='h-[87vh]'>
      <h2>Hi, my name is</h2>
      <h1>Giorgio Torre.</h1>
      <h3>I build stuff for the web.</h3>
      {/* TODO - Tenhil as a link */}
      <p>
        I’m a software engineer specialising in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building a multi-portal solution at Tenhil.
      </p>
    </div>
  );
}
