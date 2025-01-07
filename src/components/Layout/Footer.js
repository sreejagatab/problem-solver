// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div>
          <Link to="/" className="text-lg font-bold text-primary-500">
            Problem Solver
          </Link>
          <p className="mt-2 text-sm">
            &copy; {new Date().getFullYear()} Problem Solver. All rights reserved.
          </p>
        </div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <Link to="/about" className="hover:text-primary-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary-500">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-primary-500">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-primary-500">
                Terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;