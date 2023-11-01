import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Giorgio Torre' },
    { name: 'description', content: 'Welcome to my portfolio app!' },
  ];
};

export default function Index() {
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.8',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '48px' }}>Hello world!</h1>
      <p style={{ fontSize: '36px' }}>My name is Giorgio</p>
    </div>
  );
}
