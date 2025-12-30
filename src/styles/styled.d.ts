import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      accent: string;
      background: string;
      backgroundLight: string;
      surface: string;
      surfaceLight: string;
      text: string;
      textSecondary: string;
      textMuted: string;
      border: string;
      error: string;
      warning: string;
      success: string;
      info: string;
    };
    gradients: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      surface: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      glow: string;
      glowSecondary: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };
    typography: {
      fontFamily: {
        primary: string;
        mono: string;
      };
      fontSize: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
      };
      fontWeight: {
        light: number;
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
        extrabold: number;
      };
      lineHeight: {
        tight: number;
        normal: number;
        relaxed: number;
      };
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
    };
    zIndex: {
      dropdown: number;
      sticky: number;
      fixed: number;
      modal: number;
      popover: number;
      tooltip: number;
    };
  }
}
