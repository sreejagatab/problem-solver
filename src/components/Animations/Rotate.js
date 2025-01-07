// Rotate.js
import React from 'react';
import { motion } from 'framer-motion';

const Rotate = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{ rotate: -10, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      exit={{ rotate: 10, opacity: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Rotate;