import { FaBars, FaTimes } from 'react-icons/fa/index.js';

import Button from '~/components/base/Button';

type MenuIconProps = {
  iconType: 'bars' | 'cross';
  toggle: () => void;
  position?: 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';
};

const MenuIcon = ({
  iconType,
  toggle,
  position = 'relative',
}: MenuIconProps) => (
  <div
    className={`${position} ${
      position === 'relative' ? 'top-1' : 'top-8 right-8'
    } ml-2 md:hidden`}
  >
    <Button className='relative z-30' onClick={toggle}>
      {iconType === 'bars' && (
        <FaBars className='text-3xl text-secondary hover:opacity-80 md:text-4xl' />
      )}
      {iconType === 'cross' && <FaTimes className='text-secondary text-4xl' />}
    </Button>
  </div>
);

export default MenuIcon;
