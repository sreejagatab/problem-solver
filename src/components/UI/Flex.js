// Flex.js
import React from 'react';
import clsx from 'clsx';

const Flex = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        'flex flex-row items-center justify-between',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;