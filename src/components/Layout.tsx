
import React from 'react';
import { Navbar } from './Navbar';
import { motion } from 'framer-motion';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <footer className="py-6 border-t border-border">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Naga Vaishak S K. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
