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
  return (
    <div className='flex justify-between items-center w-full h-full px-4'>
      <Link to='/'>
        <img src={logo} alt='Logo' width={56} height={56} />
      </Link>
      <nav className='flex flex-row items-center md:flex-row-reverse'>
        <MenuIcon iconType='bars' toggle={toggle} />
        <div className='hidden pr-2 md:flex md:items-center'>
          {links?.map(({ type, slug, text }) =>
            type === 'link' ? (
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'border-b-2 border-secondary'
                      : 'border-b-2 border-primary'
                  } pb-1 border-solid text-secondary z-30 flex items-center h-full mx-3 text-xl hover:opacity-80`
                }
                key={uuidv4()}
                to={slug}
                prefetch='intent'
              >
                {text}
              </NavLink>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'bg-secondary text-primary'
                      : 'bg-transparent text-secondary'
                  } border-2 border-solid border-secondary z-30 transition-all duration-200 ease-in-out rounded-md text-xl py-1 px-3 mx-3 hover:opacity-80`
                }
                key={uuidv4()}
                to={slug}
                prefetch='intent'
              >
                {text}
              </NavLink>
            )
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
