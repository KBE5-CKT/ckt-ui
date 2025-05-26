export interface Theme {
  primary: string;
  primaryHover: string;
  background: string;
  backgroundHover: string;
  text: string;
  placeholder: string;
  border: string;
}

const commonTheme = {
  background: '#FFFFFF',
  text: '#111111',
  placeholder: '#94A3B8',
  border: '#CBD5E1',
};

export const blueTheme: Theme = {
  ...commonTheme,
  primary: '#0070f3',
  primaryHover: '#005bb5',
  backgroundHover: '#f0f4f8',
};

export const pinkTheme: Theme = {
  ...commonTheme,
  primary: '#ff69b4',
  primaryHover: '#d13f87',
  backgroundHover: '#f7e2eb',
};

export const brownTheme: Theme = {
  ...commonTheme,
  primary: '#8B4513',
  primaryHover: '#6a340f',
  backgroundHover: '#e0e0c8',
};

export const themeMap = {
  blue: blueTheme,
  pink: pinkTheme,
  brown: brownTheme,
};

export type ThemeKey = keyof typeof themeMap;

export const createThemeCssVars = (theme: Theme) => {
  return Object.entries(theme)
    .map(([key, value]) => `--color-${key}: ${value};`)
    .join('\n');
};
