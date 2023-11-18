import { useState } from 'react';

import Navbar from '~/components/Navbar';
import Sidebar from '~/components/Sidebar';

export type LinkType = {
  text: string;
  slug: string;
  type: 'link' | 'button' | 'mailto';
};

export const HEADER_HEIGHT = 16;

const NAV_LINKS: Array<LinkType> = [
  { text: 'Home', slug: '/', type: 'link' },
  { text: 'About', slug: '/about', type: 'link' },
  { text: 'Experience', slug: '/experience', type: 'link' },
  { text: 'Projects', slug: '/projects', type: 'link' },
  { text: 'Contact', slug: '', type: 'mailto' },
  { text: 'Resume', slug: '/resume-giorgio-torre.pdf', type: 'button' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header
      className={`relative flex justify-center items-center h-${HEADER_HEIGHT}`}
    >
      <Navbar links={NAV_LINKS} toggle={toggle} />
      <Sidebar links={NAV_LINKS} isOpen={isOpen} toggle={toggle} />
    </header>
  );
};

export default Header;
