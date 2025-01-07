// Alert.js
import React from 'react';
import clsx from 'clsx';

const Alert = ({ children, variant = 'info', className, ...props }) => {
  const variantStyles = {
    info:
      'bg-blue-100 text-blue-800 border-blue-400 dark:bg-blue-200 dark:text-blue-900',
    success:
      'bg-green-100 text-green-800 border-green-400 dark:bg-green-200 dark:text-green-900',
    warning:
      'bg-yellow-100 text-yellow-800 border-yellow-400 dark:bg-yellow-200 dark:text-yellow-900',
    error:
      'bg-red-100 text-red-800 border-red-400 dark:bg-red-200 dark:text-red-900',
  };

  return (
    <div
      className={clsx(
        'flex items-center p-4 mb-4 border rounded-lg',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Alert;