// AnchorLinks.js
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

const AnchorLinks = ({ links, className, ...props }) => {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveLink = null;
      let currentActiveOffset = 0;

      links.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom > currentActiveOffset) {
            currentActiveLink = link;
            currentActiveOffset = rect.bottom;
          }
        }
      });

      setActiveLink(currentActiveLink);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [links]);

  return (
    <nav className={clsx('flex flex-col space-y-2', className)} {...props}>
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={clsx(
            'text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors',
            activeLink?.id === link.id && 'font-medium text-primary-500'
          )}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default AnchorLinks;