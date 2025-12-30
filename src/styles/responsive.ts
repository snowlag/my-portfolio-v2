import { css } from 'styled-components';

// Breakpoint helpers for responsive design
export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Media query helpers
export const media = {
  xs: (styles: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (min-width: ${breakpoints.xs}) {
      ${styles}
    }
  `,
  sm: (styles: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (min-width: ${breakpoints.sm}) {
      ${styles}
    }
  `,
  md: (styles: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (min-width: ${breakpoints.md}) {
      ${styles}
    }
  `,
  lg: (styles: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (min-width: ${breakpoints.lg}) {
      ${styles}
    }
  `,
  xl: (styles: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (min-width: ${breakpoints.xl}) {
      ${styles}
    }
  `,
  '2xl': (styles: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (min-width: ${breakpoints['2xl']}) {
      ${styles}
    }
  `,
  // Max width queries
  maxXs: (styles: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (max-width: ${breakpoints.xs}) {
      ${styles}
    }
  `,
  maxSm: (styles: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (max-width: ${breakpoints.sm}) {
      ${styles}
    }
  `,
  maxMd: (styles: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (max-width: ${breakpoints.md}) {
      ${styles}
    }
  `,
  maxLg: (styles: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (max-width: ${breakpoints.lg}) {
      ${styles}
    }
  `,
  maxXl: (styles: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (max-width: ${breakpoints.xl}) {
      ${styles}
    }
  `,
  // Range queries
  between: (min: string, max: string) => (styles: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (min-width: ${min}) and (max-width: ${max}) {
      ${styles}
    }
  `,
  // Orientation queries
  landscape: (styles: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (orientation: landscape) {
      ${styles}
    }
  `,
  portrait: (styles: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (orientation: portrait) {
      ${styles}
    }
  `,
  // High DPI displays
  retina: (styles: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      ${styles}
    }
  `,
  // Reduced motion
  reducedMotion: (styles: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (prefers-reduced-motion: reduce) {
      ${styles}
    }
  `,
  // Dark mode
  darkMode: (styles: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (prefers-color-scheme: dark) {
      ${styles}
    }
  `,
};

// Container max-widths for different breakpoints
export const containerMaxWidths = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
  '2xl': '1320px',
};

// Spacing scale for responsive design
export const responsiveSpacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
  '5xl': '8rem',
};

// Typography scale for responsive design
export const responsiveTypography = {
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
};

// Grid system helpers
export const gridHelpers = {
  // Flexbox helpers
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  
  flexBetween: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  
  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,
};
