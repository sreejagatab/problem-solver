// Grid.js
import React from 'react';
import clsx from 'clsx';

const Grid = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;