import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    {
      name: 'description',
      content: 'About page - Giorgio Torre portfolio',
    },
  ];
};

export default function About() {
  return (
    <h1 className='text-shade-white text-4xl md:text-6xl lg:text-7xl mb-3'>
      About
    </h1>
  );
}
