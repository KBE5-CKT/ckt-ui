export interface Theme {
  primary: string;
  background: string;
  text: string;
  border: string;
}

export const blueTheme: Theme = {
  primary: '#0070f3',
  background: '#ffffff',
  text: '#111111',
  border: '#eaeaea',
};

export const pinkTheme: Theme = {
  primary: '#ff69b4',
  background: '#fff0f6',
  text: '#111111',
  border: '#ffc0cb',
};

export const brownTheme: Theme = {
  primary: '#8B4513',
  background: '#f5f5dc',
  text: '#111111',
  border: '#d2b48c',
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
