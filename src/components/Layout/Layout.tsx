import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled(motion.main)`
  flex: 1;
  padding-top: 80px; /* Account for fixed header */
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LayoutContainer>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Header />
      <AnimatePresence mode="wait">
        {!isLoading && (
          <MainContent
            id="main-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {children}
          </MainContent>
        )}
      </AnimatePresence>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
