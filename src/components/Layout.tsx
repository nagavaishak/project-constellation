import React from 'react';
import { Navbar } from './Navbar';
import { SharedBackground } from './SharedBackground';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    // Home page keeps its existing background
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
  }

  // Other pages use the shared background
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SharedBackground>
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex-grow"
        >
          {children}
        </motion.main>
        <footer className="py-6 border-t border-border/50">
          <div className="container text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Naga Vaishak S K. All rights reserved.
          </div>
        </footer>
      </SharedBackground>
    </div>
  );
};
