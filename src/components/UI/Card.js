// Card.js
import React from 'react';
import clsx from 'clsx';

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;