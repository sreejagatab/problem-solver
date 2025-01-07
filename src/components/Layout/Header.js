// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { UserMenu } from './UserMenu';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary-500">
          Problem Solver
        </Link>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;