import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

const Tooltip = ({ children, content, placement = 'top', className, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [rect, setRect] = useState(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      setRect(tooltipRect);
    }
  }, [isVisible]);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const getTooltipPosition = () => {
    const { top, left, width, height } = rect || {};
    switch (placement) {
      case 'top':
        return { top: top - height - 8, left: left + width / 2 - 72 / 2 };
      case 'right':
        return { top: top + height / 2 - 72 / 2, left: left + width + 8 };
      case 'bottom':
        return { top: top + height + 8, left: left + width / 2 - 72 / 2 };
      case 'left':
        return { top: top + height / 2 - 72 / 2, left: left - 72 - 8 };
      default:
        return {};
    }
  };

  return (
    <div
      ref={tooltipRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx('relative inline-block', className)}
      {...props}
    >
      {children}
      {isVisible && (
        <div
          className={clsx(
            'absolute z-50 bg-gray-900 text-white rounded-lg px-3 py-2 text-sm shadow-lg',
            placement === 'top' && 'animate-fade-in-up',
            placement === 'right' && 'animate-fade-in-left',
            placement === 'bottom' && 'animate-fade-in-down',
            placement === 'left' && 'animate-fade-in-right'
          )}
          style={getTooltipPosition()}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;