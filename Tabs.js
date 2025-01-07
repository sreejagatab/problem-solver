// Tabs.js
import React, { useState } from 'react';
import clsx from 'clsx';

const Tabs = ({ tabs, initialActiveTab, className, ...props }) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={clsx(
              'px-4 py-2 font-medium transition-colors duration-300',
              activeTab === index
                ? 'text-primary-500 border-primary-500 border-b-2'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            )}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;