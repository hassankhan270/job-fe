import React from 'react';

interface ICard {
  children: React.ReactNode;
  className?: string;
}
const Card: React.FC<ICard> = ({children, className}) => {
  return (
    <div
      className={`border border-gray-300 h-auto rounded-lg overflow-hidden shadow-xl m-4 p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
