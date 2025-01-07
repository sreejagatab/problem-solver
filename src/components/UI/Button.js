// Button.js
import React from 'react';
import clsx from 'clsx';

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const variantStyles = {
    primary:
      'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-400',
    secondary:
      'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-400',
    tertiary:
      'bg-transparent text-primary-500 hover:bg-primary-100 focus:ring-primary-400',
  };

  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;