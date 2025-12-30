// Base theme structure (shared properties)
const baseTheme = {
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem',
  },
  typography: {
    fontFamily: {
      primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"Fira Code", "Monaco", "Consolas", monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  transitions: {
    fast: '0.15s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
};

// Light theme
export const lightTheme = {
  ...baseTheme,
  colors: {
    primary: '#ff6b6b',
    primaryDark: '#ff5252',
    secondary: '#4ecdc4',
    accent: '#45b7d1',
    background: '#ffffff',
    backgroundLight: '#f8fafc',
    surface: '#ffffff',
    surfaceLight: '#f1f5f9',
    text: '#1e293b',
    textSecondary: '#475569',
    textMuted: '#64748b',
    border: '#e2e8f0',
    error: '#ef4444',
    warning: '#f59e0b',
    success: '#10b981',
    info: '#3b82f6',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)',
    secondary: 'linear-gradient(135deg, #4ecdc4 0%, #6dd5ed 100%)',
    accent: 'linear-gradient(135deg, #45b7d1 0%, #96c7ed 100%)',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    surface: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
    paint: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96c7ed, #ff8e8e)',
    artistic: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
  },
  shadows: {
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 30px rgba(255, 107, 107, 0.4)',
    glowSecondary: '0 0 30px rgba(78, 205, 196, 0.4)',
    paint: '0 0 40px rgba(255, 107, 107, 0.2), 0 0 80px rgba(78, 205, 196, 0.1)',
  },
};

// Dark theme
export const darkTheme = {
  ...baseTheme,
  colors: {
    primary: '#ff6b6b',
    primaryDark: '#ff5252',
    secondary: '#4ecdc4',
    accent: '#45b7d1',
    background: '#0f172a',
    backgroundLight: '#1e293b',
    surface: '#1e293b',
    surfaceLight: '#334155',
    text: '#f1f5f9',
    textSecondary: '#cbd5e1',
    textMuted: '#94a3b8',
    border: '#334155',
    error: '#ef4444',
    warning: '#f59e0b',
    success: '#10b981',
    info: '#3b82f6',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)',
    secondary: 'linear-gradient(135deg, #4ecdc4 0%, #6dd5ed 100%)',
    accent: 'linear-gradient(135deg, #45b7d1 0%, #96c7ed 100%)',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    surface: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
    paint: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96c7ed, #ff8e8e)',
    artistic: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
  },
  shadows: {
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
    glow: '0 0 30px rgba(255, 107, 107, 0.5)',
    glowSecondary: '0 0 30px rgba(78, 205, 196, 0.5)',
    paint: '0 0 40px rgba(255, 107, 107, 0.3), 0 0 80px rgba(78, 205, 196, 0.2)',
  },
};

// Default export for backward compatibility
export const theme = lightTheme;

export type Theme = typeof lightTheme;
