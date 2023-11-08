import type { Dispatch, SetStateAction } from 'react';
import { useCallback } from 'react';
import type { TabType } from '../TabMenu';
import Button from './Button';

type Props = {
  selectedTabKey: string;
  setSelectedTabKey: Dispatch<SetStateAction<string>>;
  tabSelectors: Partial<TabType>[];
};

const TabSelector = ({
  selectedTabKey,
  setSelectedTabKey,
  tabSelectors,
}: Props) => {
  const isSelectedOption = useCallback(
    (key: string) => selectedTabKey === key,
    [selectedTabKey]
  );

  return (
    <div className='flex flex-row lg:flex-col'>
      {tabSelectors.map(({ slug, displayName }) => (
        <Button
          key={slug}
          onClick={() => setSelectedTabKey(slug || '')}
          className={isSelectedOption(slug || '') ? 'selected' : undefined} // use Tailwind
        >
          {displayName}
        </Button>
      ))}
    </div>
  );
};

export default TabSelector;
