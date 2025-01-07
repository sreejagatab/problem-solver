// Parallax.js
import React from 'react';
import { motion } from 'framer-motion';

const Parallax = ({ children, offset = 50, ...props }) => {
  return (
    <motion.div
      initial={{ y: offset }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Parallax;