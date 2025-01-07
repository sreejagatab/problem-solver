// Text.js
import React from 'react';
import clsx from 'clsx';

const Text = ({ children, variant = 'body', className, ...props }) => {
  const variantStyles = {
    body: 'text-gray-700 dark:text-gray-300',
    lead: 'text-lg text-gray-700 dark:text-gray-300',
    small: 'text-sm text-gray-600 dark:text-gray-400',
  };

  return (
    <p
      className={clsx(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;