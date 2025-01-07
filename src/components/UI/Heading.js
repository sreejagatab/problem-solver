// Heading.js
import React from 'react';
import clsx from 'clsx';

const Heading = ({ children, level = 1, className, ...props }) => {
  const Component = `h${level}`;

  return (
    <Component
      className={clsx(
        'font-bold text-gray-900 dark:text-gray-100',
        level === 1 && 'text-4xl',
        level === 2 && 'text-3xl',
        level === 3 && 'text-2xl',
        level === 4 && 'text-xl',
        level === 5 && 'text-lg',
        level === 6 && 'text-base',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Heading;