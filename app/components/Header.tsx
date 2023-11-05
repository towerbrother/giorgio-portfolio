import { useState } from 'react';

import Navbar from '~/components/Navbar';
import Sidebar from '~/components/Sidebar';

export type LinkType = {
  text: string;
  slug: string;
  type: 'link' | 'button';
};

const LINKS: Array<LinkType> = [
  { text: 'About', slug: '/about', type: 'link' },
  { text: 'Experience', slug: '/experience', type: 'link' },
  { text: 'Work', slug: '/work', type: 'link' },
  { text: 'Contact', slug: '/contact', type: 'link' },
  { text: 'Resume', slug: '/resume.pdf', type: 'button' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className='relative flex justify-center items-center h-16'>
      <Navbar links={LINKS} toggle={toggle} />
      <Sidebar links={LINKS} isOpen={isOpen} toggle={toggle} />
    </header>
  );
};

export default Header;
