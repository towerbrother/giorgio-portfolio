import { NavLink } from '@remix-run/react';
import { v4 as uuidv4 } from 'uuid';

import MenuIcon from '~/components/base/MenuIcon';

import type { LinkType } from '~/components/Header';

type NavbarProps = {
  links: Array<LinkType>;
  toggle: () => void;
};

const Navbar = ({ links, toggle }: NavbarProps) => {
  return (
    <div className='flex justify-between items-center w-full h-full px-3'>
      <div>LOGO</div> {/* TODO */}
      <nav className='flex flex-row items-center xl:flex-row-reverse'>
        <MenuIcon iconType='bars' toggle={toggle} />
        <div className='hidden pr-2 xl:flex xl:items-center'>
          {links?.map(({ type, slug, text }) =>
            type === 'link' ? (
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-cyan-600 hover:' : 'text-neutral-800 '
                  } z-30 flex items-center h-full mx-3 font-bold text-xl hover:opacity-80`
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
                  `${isActive ? 'bg-cyan-600' : 'bg-neutral-800'} z-30 ${
                    text === 'RSVP' ? 'animate-bounce' : ''
                  } transition-all duration-200 ease-in-out rounded-md text-neutral-100 font-bold text-xl py-2 px-4 mx-3 hover:opacity-80`
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
