// import { FaBars, FaTimes } from 'react-icons/fa';

import Button from '~/components/base/Button';
import ConditionalWrapper from '~/components/base/ConditionalWrapper';

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
    } ml-2 xl:hidden`}
  >
    <Button className='relative z-30' onClick={toggle}>
      <ConditionalWrapper condition={iconType === 'bars'}>
        {/* TODO */}
        {/* <FaBars className='text-3xl text-neutral-800 hover:opacity-80 lg:text-4xl' /> */}
        BARS
      </ConditionalWrapper>
      <ConditionalWrapper condition={iconType === 'cross'}>
        {/* TODO */}
        {/* <FaTimes className='text-neutral-300 text-4xl' /> */}
        TIMES
      </ConditionalWrapper>
    </Button>
  </div>
);

export default MenuIcon;
