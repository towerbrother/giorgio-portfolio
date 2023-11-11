import { Link, NavLink } from '@remix-run/react';
import { v4 as uuidv4 } from 'uuid';

import MenuIcon from '~/components/base/MenuIcon';

import type { LinkType } from '~/components/Header';

import logo from '../assets/logo.png';

type NavbarProps = {
  links: Array<LinkType>;
  toggle: () => void;
};

const Navbar = ({ links, toggle }: NavbarProps) => {
  const mapLink = ({ type, slug, text, key }: LinkType & { key: string }) => {
    switch (type) {
      case 'mailto':
        return (
          <a
            key={key}
            href='mailto:giorgio.torre8@gmail.com'
            className='border-b-2 border-primary pb-1 border-solid text-secondary z-30 flex items-center h-full mx-3 text-xl hover:opacity-90'
          >
            {text}
          </a>
        );
      case 'button':
        return (
          <a
            key={key}
            className='bg-transparent text-secondary border-2 border-solid border-secondary z-30 transition-all duration-200 ease-in-out text-xl pt-0.5 pb-1 px-2 mx-3 hover:bg-secondary hover:text-primary'
            href={slug}
            rel='noopener noreferrer'
            target='_blank'
          >
            {text}
          </a>
        );
      case 'link':
      default:
        return (
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? 'border-b-2 border-secondary'
                  : 'border-b-2 border-primary'
              } pb-1 border-solid text-secondary z-30 flex items-center h-full mx-3 text-xl hover:opacity-90`
            }
            key={key}
            to={slug}
            prefetch='intent'
          >
            {text}
          </NavLink>
        );
    }
  };

  return (
    <div className='flex justify-between items-center w-full h-full px-3'>
      <Link to='/' className='hover:opacity-90'>
        <img src={logo} alt='Logo' width={56} height={56} />
      </Link>
      <nav className='flex flex-row items-center md:flex-row-reverse'>
        <MenuIcon iconType='bars' toggle={toggle} />
        <div className='hidden pr-2 md:flex md:items-center'>
          {links?.map(({ type, slug, text }) =>
            mapLink({ type, text, slug, key: uuidv4() })
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
