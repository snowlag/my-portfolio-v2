import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const HeaderContainer = styled(motion.header)<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  background: ${({ $isScrolled, theme }) =>
    $isScrolled ? `${theme.colors.background}E6` : 'transparent'};
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? 'blur(10px)' : 'none')};
  border-bottom: ${({ $isScrolled, theme }) =>
    $isScrolled ? `1px solid ${theme.colors.border}` : 'none'};
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ $isScrolled, theme }) => 
    $isScrolled ? theme.shadows.md : 'none'};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.textSecondary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  position: relative;
  transition: ${({ theme }) => theme.transitions.fast};

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')};
    height: 2px;
    background: ${({ theme }) => theme.gradients.primary};
    transition: ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const MobileMenuLine = styled.span<{ $isOpen: boolean; $index: number }>`
  width: 25px;
  height: 2px;
  background: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.transitions.fast};
  transform-origin: center;

  ${({ $isOpen, $index }) => {
    if ($isOpen) {
      switch ($index) {
        case 0:
          return 'transform: rotate(45deg) translate(5px, 5px);';
        case 1:
          return 'opacity: 0;';
        case 2:
          return 'transform: rotate(-45deg) translate(7px, -6px);';
        default:
          return '';
      }
    }
    return '';
  }}
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.lg};
  display: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const MobileNavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.textSecondary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ $isActive, theme }) =>
    $isActive ? 'rgba(99, 102, 241, 0.1)' : 'transparent'};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: rgba(99, 102, 241, 0.1);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ThemeToggleButton = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.transitions.fast};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  
  &:hover {
    background: ${({ theme }) => theme.colors.surfaceLight};
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 36px;
    height: 36px;
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, themeMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Handle hash navigation when component mounts or location changes
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure page is rendered
    }
  }, [location]);

  const handleNavClick = (path: string) => {
    if (path.startsWith('#')) {
      const sectionId = path.substring(1);
      
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        // Navigate to home page and then scroll to section
        window.location.href = `/#${sectionId}`;
        return;
      }
      
      // If we're already on home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '#skills', label: 'Skills' },
    { path: '#education', label: 'Education' },
    { path: '#work', label: 'Work' },
    { path: '#achievements', label: 'Achievements' },
    { path: '#projects', label: 'Projects' },
    { path: '#contact', label: 'Contact' },
  ];

  return (
    <HeaderContainer
      $isScrolled={isScrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Nav>
        <Logo to="/">AJ</Logo>
        
        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              $isActive={location.pathname === item.path}
              onClick={() => handleNavClick(item.path)}
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggleButton
            onClick={toggleTheme}
            aria-label={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
          >
            {themeMode === 'light' ? '🌙' : '☀️'}
          </ThemeToggleButton>
        </NavLinks>

        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {[0, 1, 2].map((index) => (
            <MobileMenuLine
              key={index}
              $isOpen={isMobileMenuOpen}
              $index={index}
            />
          ))}
        </MobileMenuButton>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <MobileNavLinks>
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.path}
                  to={item.path}
                  $isActive={location.pathname === item.path}
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.label}
                </MobileNavLink>
              ))}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                paddingTop: '1rem',
                borderTop: `1px solid ${theme.colors.border}`,
                marginTop: '1rem'
              }}>
                <ThemeToggleButton
                  onClick={toggleTheme}
                  aria-label={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
                >
                  {themeMode === 'light' ? '🌙' : '☀️'}
                </ThemeToggleButton>
              </div>
            </MobileNavLinks>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
