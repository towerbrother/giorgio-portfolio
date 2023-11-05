import { v4 as uuidv4 } from 'uuid';
import { NavLink } from '@remix-run/react';

import type { LinkType } from '~/components/Header';

import MenuIcon from '~/components/base/MenuIcon';

type SidebarProps = {
  links: Array<LinkType>;
  isOpen: boolean;
  toggle: () => void;
};

const Sidebar = ({ links, isOpen, toggle }: SidebarProps) => {
  const linkClassName =
    'flex justify-center items-center my-1 mx-0 py-4 px-0 text-xl text-secondary font-bold';
  const buttonLinkClassName =
    'transition-all duration-300 ease-in-out rounded-xl bg-transparent text-secondary border-2 border-solid border-secondary my-4 mx-0 py-3 px-6 font-bold hover:opacity-80';

  return (
    <aside
      onClick={toggle}
      className={`flex justify-center items-center fixed left-0 w-full h-full transition-all duration-300 ease-in-out z-50 bg-primary ${
        isOpen ? 'top-0 opacity-100' : '-top-full opacity-0'
      }`}
    >
      <MenuIcon iconType='cross' toggle={toggle} position='absolute' />
      <div className='flex flex-col justify-between items-center overflow-y-scroll h-[65%]'>
        {links?.map(({ type, slug, text }) => (
          <NavLink
            className={type === 'link' ? linkClassName : buttonLinkClassName}
            key={uuidv4()}
            to={slug}
            prefetch='intent'
          >
            {text}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
