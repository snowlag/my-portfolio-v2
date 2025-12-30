import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    /* Responsive font sizing */
    @media (max-width: 768px) {
      font-size: 14px;
    }
    
    @media (min-width: 1200px) {
      font-size: 18px;
    }
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    
    /* Improve text rendering on mobile */
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    
    /* Better touch targets on mobile */
    @media (max-width: 768px) {
      -webkit-tap-highlight-color: transparent;
    }
  }

  #root {
    min-height: 100vh;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundLight};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }

  /* Selection styles */
  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
  }

  /* Focus styles */
  *:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  
  /* Skip link for accessibility */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
    
    &:focus {
      top: 6px;
    }
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }

  h5 {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }

  h6 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  /* Button styles */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    transition: ${({ theme }) => theme.transitions.fast};
  }

  /* Input styles */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  /* Image styles */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Utility classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
    
    /* Responsive container padding */
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 0 ${({ theme }) => theme.spacing.sm};
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 0 ${({ theme }) => theme.spacing.xl};
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      padding: 0 ${({ theme }) => theme.spacing['2xl']};
    }
  }

  /* Animation keyframes */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
    }
    50% {
      box-shadow: 0 0 30px rgba(99, 102, 241, 0.6);
    }
  }
`;
