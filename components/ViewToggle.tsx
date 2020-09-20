import * as React from 'react';

interface ViewToggleProps {
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    state: 'grid' | 'list',
  ) => void;
  value?: 'grid' | 'list';
}

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      </div>
      <div className={`rounded p-1${gridStyle}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ViewToggle;
