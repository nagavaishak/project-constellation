
import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { motion } from 'framer-motion';
import { useLoading } from '@/contexts/LoadingContext';
import { useLocation } from 'react-router-dom';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { showLoading, hideLoading } = useLoading();
  const location = useLocation();

  useEffect(() => {
    // Show loading when route changes
    showLoading();
    
    // Hide loading after a short delay to simulate page load
    const timer = setTimeout(() => {
      hideLoading();
    }, 800);

    return () => {
      clearTimeout(timer);
      hideLoading();
    };
  }, [location.pathname, showLoading, hideLoading]);

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
