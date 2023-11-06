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
    <div className='my-6 md:my-12'>
      <h1 className='text-shade-white text-4xl md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8'>
        Where I've Worked
      </h1>
    </div>
  );
}
