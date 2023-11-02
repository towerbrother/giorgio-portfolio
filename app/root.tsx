import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import styles from './tailwind.css';

import Header from './components/Header';
import Footer from './components/Footer';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'preload',
      as: 'style',
      href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap',
      crossOrigin: 'anonymous',
    },
    { rel: 'stylesheet', href: styles },
  ];
};

export const meta: MetaFunction = () => {
  return [
    { title: 'Giorgio Torre' },
    { name: 'description', content: 'My personal portfolio website.' },
  ];
};

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <main className='bg-indigo-700'>
          <Header />
          <Outlet />
          <Footer />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
