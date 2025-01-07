// Scrollable.js
import React from 'react';
import clsx from 'clsx';

const Scrollable = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        'overflow-y-auto max-h-96 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Scrollable;