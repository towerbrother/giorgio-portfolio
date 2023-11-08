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
          className={`text-left text-md md:text-xl py-1 lg:py-3 px-1 lg:pl-4 lg:pr-0 border-l-2 ${
            isSelectedOption(slug || '')
              ? 'border-secondary text-secondary'
              : 'border-light-gray text-light-gray hover:text-secondary'
          }`}
        >
          {displayName}
        </Button>
      ))}
    </div>
  );
};

export default TabSelector;
