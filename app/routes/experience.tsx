import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    {
      name: 'description',
      content: 'Experience page - Giorgio Torre portfolio',
    },
  ];
};

export default function Experience() {
  return (
    <h1 className='text-shade-white text-4xl md:text-6xl lg:text-7xl mb-3'>
      Experience
    </h1>
  );
}
