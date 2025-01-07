// Expandable.js
import React, { useState } from 'react';
import clsx from 'clsx';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

const Expandable = ({ title, children, className, ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={clsx('border rounded-lg', className)} {...props}>
      <div
        className="bg-gray-100 dark:bg-gray-800 p-4 flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h4 className="text-gray-900 dark:text-gray-100 font-medium">{title}</h4>
        {isExpanded ? (
          <ChevronUpIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
        )}
      </div>
      {isExpanded && (
        <div className="p-4 border-t dark:border-gray-700">{children}</div>
      )}
    </div>
  );
};

export default Expandable;