import * as React from 'react';

const BookCard: React.FC = () => {
  return (
    <div className="w-40 m-2">
      <img
        className="overflow-hidden rounded-lg shadow-lg mb-2"
        src={`https://loremflickr.com/280/400?${(Math.random() * 100).toFixed(
          0,
        )}`}
        alt="Sunset in the mountains"
      />
      <div className="w-full font-medium p-1">The Cat in the Hat</div>
    </div>
  );
};

export default BookCard;
