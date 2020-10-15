import React from 'react';
import { BookCard, ViewToggle, ViewToggleValue } from '../components';

const HomePage: React.FC = () => {
  const [view, setView] = React.useState<ViewToggleValue>('grid');

  const toggleHandler = React.useCallback(() => {
    const newState = view === 'grid' ? 'list' : 'grid';
    setView(newState);
  }, [setView, view]);

  return (
    <>
      <header className="fixed w-screen bg-white shadow-xs p-4">Bookoid</header>
      <main className="container h-screen mx-auto pt-20 pb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl mb-4">My Library</h2>
          <ViewToggle onClick={toggleHandler} value={view} />
        </div>
        <div className="flex flex-wrap -m-2">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <BookCard key={i} />
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;
