import * as React from 'react';
import ViewGridIcon from './ViewGridIcon';
import ViewListIcon from './ViewListIcon';

type ViewToggleProps = {
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    state: 'grid' | 'list',
  ) => void;
  value?: 'grid' | 'list';
};

const ViewToggle: React.FC<ViewToggleProps> = (props) => {
  const { onClick, value } = props;

  const [state, setState] = React.useState(value ?? 'grid');

  const onClickHandler = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const newState = state === 'grid' ? 'list' : 'grid';
      setState(newState);
      if (onClick) {
        onClick(event, newState);
      }
    },
    [state, setState, onClick],
  );

  let listStyle = '';
  let gridStyle = '';

  if (state === 'list') {
    listStyle += ' shadow bg-white';
  } else {
    gridStyle += ' shadow bg-white';
  }

  return (
    <div
      className="flex rounded p-1 cursor-pointer bg-gray-500"
      onClick={onClickHandler}
    >
      <div className={`rounded p-1${listStyle}`}>
        <ViewListIcon />
      </div>
      <div className={`rounded p-1${gridStyle}`}>
        <ViewGridIcon />
      </div>
    </div>
  );
};

export default ViewToggle;
