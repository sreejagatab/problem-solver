// Breadcrumbs.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const Breadcrumbs = ({ className, ...props }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className={clsx('flex items-center text-gray-600 dark:text-gray-400', className)} {...props}>
      <Link to="/" className="hover:text-primary-500 transition-colors">
        Home
      </Link>
      <span className="mx-2">/</span>
      {pathnames.map((pathname, index) => {
        const routeLink = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLastPathname = index === pathnames.length - 1;

        return (
          <React.Fragment key={pathname}>
            {isLastPathname ? (
              <span className="font-medium text-gray-900 dark:text-gray-100">{pathname}</span>
            ) : (
              <>
                <Link to={routeLink} className="hover:text-primary-500 transition-colors">
                  {pathname}
                </Link>
                <span className="mx-2">/</span>
              </>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;