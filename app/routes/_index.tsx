import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Giorgio Torre' },
    { name: 'description', content: 'Welcome to my portfolio app!' },
  ];
};

export default function Index() {
  return (
    <div className='text-center'>
      <h1 className='text-8xl'>Hello world!</h1>
      <p className='text-5xl'>My name is Giorgio</p>
    </div>
  );
}
