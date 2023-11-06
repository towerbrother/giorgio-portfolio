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

import appleTouchIcon from './assets/apple-touch-icon.png';
import androidChrome384 from './assets/android-chrome-384x384.png';
import androidChrome192 from './assets/android-chrome-192x192.png';
import favicon16 from './assets/favicon-16x16.png';
import favicon32 from './assets/favicon-32x32.png';

import Header from './components/Header';
// import Footer from './components/Footer';

// TODO - make footer hidden appearing only on hover or scroll to bottom
// TODO - og image / title / etc when site is ready

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
    { rel: 'apple-touch-icon', sizes: '180x180', href: appleTouchIcon },
    { rel: 'icon', sizes: '192x192', href: androidChrome192 },
    { rel: 'icon', sizes: '384x384', href: androidChrome384 },
    { rel: 'icon', sizes: '16x16', href: favicon16 },
    { rel: 'icon', sizes: '32x32', href: favicon32 },
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
      <body className='bg-primary h-screen'>
        <Header />
        <main className='px-5 min-[530px]:px-12 sm:px-16 md:px-28 lg:px-36 xl:px-48 2xl:62 h-full'>
          <div className='flex flex-col justify-center'>
            <Outlet />
          </div>
        </main>
        {/* <Footer /> */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
