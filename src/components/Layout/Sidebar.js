// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, SearchIcon, SettingsIcon } from '@heroicons/react/outline';

const Sidebar = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <nav>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              activeClassName="text-primary-500 font-medium"
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500"
            >
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              activeClassName="text-primary-500 font-medium"
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500"
            >
              <SearchIcon className="h-5 w-5" />
              <span>Search</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              activeClassName="text-primary-500 font-medium"
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-500"
            >
              <SettingsIcon className="h-5 w-5" />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;