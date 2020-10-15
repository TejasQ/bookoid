import * as React from 'react';

import clsx from 'clsx';

import ViewGridIcon from './ViewGridIcon';
import ViewListIcon from './ViewListIcon';

export type ViewToggleValue = 'grid' | 'list';

type ViewToggleProps = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  value?: ViewToggleValue;
};

const ViewToggle: React.FC<ViewToggleProps> = (props) => {
  const { onClick, value } = props;

  return (
    <div
      className="flex rounded p-1 cursor-pointer bg-gray-500"
      onClick={onClick}
    >
      <div
        className={clsx('rounded', 'p-1', {
          'shadow bg-white': value === 'list',
        })}
      >
        <ViewListIcon />
      </div>
      <div
        className={clsx('rounded', 'p-1', {
          'shadow bg-white': value !== 'list',
        })}
      >
        <ViewGridIcon />
      </div>
    </div>
  );
};

export default ViewToggle;
